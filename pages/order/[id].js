
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../store/GlobalState";
import { useRouter } from "next/router";
import OrderDetail from '../../components/OrderDetail'

export default function DetailOrder() {
  const { state, dispatch } = useContext(DataContext);
  const { auth, orders } = state;

  const router = useRouter();

  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    const newArr = orders.filter((order) => order._id === router.query.id);
    setOrderDetail(newArr);
  }, [orders]);

  return (
    <div className='my-3'>
      <Head>
        <title>Detail Orders</title>
      </Head>
      <div>
        <button className='btn btn-dark' onClick={() => router.back()}>
          <i className='fas fa-long-arrow-alt-left mr-2'></i>
          Go Back
        </button>
      </div>
<OrderDetail orderDetail={orderDetail}  />
    </div>
  );
}
