/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { supabase } from "@lib/supabase";

export const useCartStore = create<any>((set, get) => ({
  user: null,
  cart: null,
  cartItems: [],
  loading: false,

  init: async () => {
    // ? check if a user is logged in
    let { data } = await supabase.auth.getUser();
    if (!data.user) {
      // = if no user, create one
      await supabase.auth.signInAnonymously();
      ({ data } = await supabase.auth.getUser());
    }
    // + save user in zustand
    set({ user: data.user });
    await get().loadCart();
  },

  // - The user always has an active cart
  loadCart: async () => {
    set({ loading: true });
    const user = get().user;
    if (!user) return;

    // * Fetch existing cart
    let { data: cart } = await supabase
      .from("carts")
      .select("*")
      .eq("user_id", user.id)
      .eq("status", "active")
      .single();

    // $ If no cart, create one
    if (!cart) {
      const res = await supabase
        .from("carts")
        .insert({ user_id: user.id })
        .select()
        .single();

      cart = res.data;
    }

    // # Fetch cart items
    const { data: items } = await supabase
      .from("cart_items")
      .select(`id, quantity, products(id, name, price, image_url)`)
      .eq("cart_id", cart.id);

    // ` save cart and items in state
    set({
      cart,
      cartItems:
        items?.map((i) => ({
          id: i.id,
          quantity: i.quantity,
          product: i.products,
        })) || [],
      loading: false,
    });
  },

  // ' add a product to cart
  addToCart: async (productId: string) => {
    // ~ get current cart
    const cart = get().cart;
    if (!cart) return;

    // ^ if product already exist in cart, update. If not, insert
    await supabase.from("cart_items").upsert({
      cart_id: cart.id,
      product_id: productId,
      quantity: 1,
    });

    // & reload cart
    await get().loadCart();
  },

  updateQuantity: async (itemId: string | number, qty: number) => {
    // _ validating quantity ensuring the quantity is not less than 1
    if (qty < 1) return;

    await supabase
      .from("cart_items")
      .update({ quantity: qty })
      .eq("id", itemId);
  },

  removeFromCart: async (itemId: string) => {
    await supabase.from("cart_items").delete().eq("id", itemId);
    await get().loadCart();
  },

  clearCart: async () => {
    // # Ensure cart exist
    const cart = get().cart;
    if (!cart) return;

    // ' Delete all items
    await supabase.from("cart_items").delete().eq("cart_id", cart.id);
    set({ cartItems: [] });
  },
}));
