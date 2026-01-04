/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { supabase } from "@lib/supabase";

export const useCartStore = create<any>((set, get) => ({
  user: null,
  cart: null,
  cartItems: [],

  init: async () => {
    // ? check if a user is logged in
    let { data } = await supabase.auth.getUser();
    if (!data.user) {
      // = if no user, create one
      await supabase.auth.signInAnonymously();
      ({ data } = await supabase.auth.getUser());
    }
    set({ user: data.user });
    await get().loadCart();
  },

  loadCart: async () => {
    const user = get().user;
    if (!user) return;

    let { data: cart } = await supabase
      .from("carts")
      .select("*")
      .eq("user_id", user.id)
      .eq("status", "active")
      .single();

    if (!cart) {
      const res = await supabase
        .from("carts")
        .insert({ user_id: user.id })
        .select()
        .single();

      cart = res.data;
    }

    const { data: items } = await supabase
      .from("cart_items")
      .select(`id, quantity, products(id, name, price, image_url)`)
      .eq("cart_id", cart.id);

    set({ cart, cartItems: items || [] });
  },
  
  addToCart: async (productId:string) => {
    
  }
}));
