import Link from "next/link";
import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import { getData, postData } from "../utils/fetchData";
import { useRouter } from "next/router";

export default function Cart() {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  if (cart.length === 0)
    return (
      <img
        className='img-responsive w-100'
        src='/empty_cart.jpg'
        alt='not empty'
      />
    );

  return <div>Cart</div>;
}
