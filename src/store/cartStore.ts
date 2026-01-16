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

  // - Load cart items for the user
  loadCart: async () => {
    set({ loading: true });
    const user = get().user;
    if (!user) {
      set({ loading: false });
      return;
    }

    // # Fetch cart items
    const { data: items } = await supabase
      .from("cart_items")
      .select(`id, quantity, products(id, name, price, image_url)`)
      .eq("user_id", user.id);

    // ` save cart and items in state
    set({
      cart: { id: user.id }, // use user.id as cart id for consistency
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
    // ~ get current user
    const user = get().user;
    if (!user) return;

    // ^ check if product already exists in cart
    const { data: existing } = await supabase
      .from("cart_items")
      .select("id, quantity")
      .eq("user_id", user.id)
      .eq("product_id", productId)
      .maybeSingle();

    if (existing) {
      // update quantity
      await supabase
        .from("cart_items")
        .update({ quantity: existing.quantity + 1 })
        .eq("id", existing.id);
    } else {
      // insert new item
      await supabase
        .from("cart_items")
        .insert({ user_id: user.id, product_id: productId, quantity: 1 });
    }

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
    // # Ensure user exist
    const user = get().user;
    if (!user) return;

    // ' Delete all items
    await supabase.from("cart_items").delete().eq("user_id", user.id);
    set({ cartItems: [] });
  },
}));
