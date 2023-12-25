"use client";
import React, { useEffect } from "react";

const LocalApi = () => {
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      console.log("data", data);
    };
    fetchApi();
  }, []);

  const makeApiCall = async () => {
    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Jil's GF",
        price: 6000,
      }),
    });
  };

  return <button onClick={makeApiCall}>Make API Call</button>;
};

export default LocalApi;
