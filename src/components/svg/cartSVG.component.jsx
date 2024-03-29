import React from "react";

const CartSVG = ({ color }) => (
  <svg width={20} height={20} fill="none">
    <path
      d="M6 16c-1.1 0-1.99.9-1.99 2S4.9 20 6 20s2-.9 2-2-.9-2-2-2zM0 0v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H6.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 19 2H4.21l-.94-2H0zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
      fill={color ? color : "#171C17"}
    />
  </svg>
);

export default CartSVG;
