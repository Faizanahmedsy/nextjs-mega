import { createProduct, getProducts } from "@/lib/database";
import { NextResponse } from "next/server";

export const GET = async (req, res, next) => {
  try {
    const products = await getProducts();

    return NextResponse.json(
      {
        message: "Products fetched successfully",
        products,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    // return NextResponse.next();
    return NextResponse.json(
      {
        message: "External Server Error",
        error,
      }.error,
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req, res, next) => {
  const { name, price } = await req.json();

  try {
    const product = {
      id: Math.floor(Math.random() * 100) + 1,
      name,
      price,
    };

    createProduct(product);

    return NextResponse.json(
      {
        message: "Product added successfully",
        product,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "External Server Error",
        error,
      },
      {
        status: 500,
      }
    );
  }
};

//TEST THEM
// export const state = () => ({
//   products: [],
//   isLoading: false,
//   status: "idle",
// });

// export const getters = {
//   getProducts: (state) => state.products,
//   isLoading: (state) => state.isLoading,
//   status: (state) => state.status,
// };

// export const mutations = {
//   setProducts(state, products) {
//     state.products = products;
//   },
//   setIsLoading(state, isLoading) {
//     state.isLoading = isLoading;
//   },
//   setStatus(state, status) {
//     state.status = status;
//   },
// };

// export const actions = {
//   async fetchProducts({ commit }) {
//     commit("setIsLoading", true);
//     commit("setStatus", "loading");
//     const products = await getProducts();
//     commit("setProducts", products);
//     commit("setIsLoading", false);
//     commit("setStatus", "idle");
//   },
// };
