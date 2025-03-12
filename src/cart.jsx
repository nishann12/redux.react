import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "./CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover border">
            <thead className="table-dark">
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th className="text-center">Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) =>
                item.quantity > 0 ? ( 
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded"
                        style={{ width: "80px", height: "80px", objectFit: "cover" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn btn-outline-danger btn-sm me-2"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          −
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-outline-success btn-sm ms-2"
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        ❌ Remove
                      </button>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>

          <div className="text-end mt-3">
            <h4 className="fw-bold">
              Total: $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
