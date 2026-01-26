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
      cart: { id: user.id },
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
      // $ update quantity
      await supabase
        .from("cart_items")
        .update({ quantity: existing.quantity + 1 })
        .eq("id", existing.id);

      await supabase
        .from("products")
        .update({ in_cart: true })
        .eq("id", productId);
    } else {
      // ? insert new item
      await supabase
        .from("cart_items")
        .insert({ user_id: user.id, product_id: productId, quantity: 1 });

      await supabase
        .from("products")
        .update({ in_cart: true })
        .eq("id", productId);
    }

    await get().loadCart();
  },

  updateQuantity: async (itemId: string | number, qty: number) => {
    // _ validating quantity ensuring the quantity is not less than 1
    if (qty < 1) return;

    await supabase
      .from("cart_items")
      .update({ quantity: qty })
      .eq("id", itemId);

    await get().loadCart();
  },

  removeFromCart: async (itemId: string) => {
    // ^ Get the product_id before deleting
    const { data: item } = await supabase
      .from("cart_items")
      .select("product_id")
      .eq("id", itemId)
      .single();

    await supabase.from("cart_items").delete().eq("id", itemId);

    if (item) {
      await supabase
        .from("products")
        .update({ in_cart: false })
        .eq("id", item.product_id);
    }

    await get().loadCart();
  },

  clearCart: async () => {
    // # Ensure user exist
    const user = get().user;
    if (!user) return;

    // - Get all product_ids before deleting
    const { data: items } = await supabase
      .from("cart_items")
      .select("product_id")
      .eq("user_id", user.id);

    // ' Delete all items
    await supabase.from("cart_items").delete().eq("user_id", user.id);

    // = Update products in_cart to false
    if (items && items.length > 0) {
      const productIds = items.map((i) => i.product_id);
      await supabase
        .from("products")
        .update({ in_cart: false })
        .in("id", productIds);
    }

    set({ cartItems: [] });
  },
}));
