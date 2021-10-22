import React, { useRef, useEffect } from "react";
import { useSelector } from 'react-redux'

const Paypal = () => {
    const total = useSelector(state => state.cart.cartTotalAmount)
    const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking hoodies",
                amount: {
                  currency_code: "USD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
        style: {
            layout:  'horizontal',
            color:   'white',
            shape:   'rect',
          }
      })
      .render(paypal.current);
  }, []);

  return (
    <div className=' w-full'>
      <div ref={paypal}></div>
    </div>
  );
}
export default Paypal