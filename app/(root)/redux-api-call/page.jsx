"use client";
import { fetchTodos } from "@/lib/toolkit/slices/testApiCall";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ReduxApiCall() {
  const dispatch = useDispatch();

  // const GlobalState = useSelector((state) => state);

  const { data, isLoading, isSuccess, isError } = useSelector(
    (state) => state.todosSlice
  );

  // console.log("GlobalState", GlobalState);

  const fetchApi = async () => {
    const res = await dispatch(fetchTodos());
    console.log("res", res);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return <h1>Hello WOrld</h1>;
}
