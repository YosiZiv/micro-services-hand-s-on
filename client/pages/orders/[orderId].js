import { useEffect, useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
import StripeCheckout from "react-stripe-checkout";
const OrderShow = ({ order, currentUser }) => {
  const { doRequest, errors } = useRequest({
    url: "/api/payments",
    method: "post",
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push("/orders"),
  });
  const [timeLeft, setTimeLeft] = useState(0);
  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };
    // call interval call the function 1 sec late so we call at first
    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);
    return () => clearInterval(timerId);
  }, []);
  if (timeLeft < 0) {
    return <div>Order Expired</div>;
  }
  return (
    <div>
      Time Left to pay : {timeLeft} seconds
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey="pk_test_51H6m3iAdxIYCzqMPhLJON1mjP4zNTSI5fUAx2DJtBALDBspIvpecEdygQIrf5VgIB4jJWG8oGhZRlvAbpsloix3C00ri7cBwlH"
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      {errors}
    </div>
  );
};
OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);
  return { order: data };
};
export default OrderShow;
