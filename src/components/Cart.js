// import React from 'react';

// function Cart({ cartItems, removeFromCart }) {
//   const getTotalPrice = () => {
//     return cartItems.reduce((total, product) => total + product.price, 0);
//   };

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       <div className="cart-items">
//         {cartItems.length === 0 ? (
//           <p>No items in cart</p>
//         ) : (
//           cartItems.map(item => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.name} />
//               <div>
//                 <h3>{item.name}</h3>
//                 <p>${item.price}</p>
//                 <button onClick={() => removeFromCart(item)}>Remove</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       <div className="total">
//         <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
//       </div>
//     </div>
//   );
// }

// export default Cart;