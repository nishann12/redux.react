import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from "./CartSlice";
import { products } from "./products";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.size}</p>
          <h4 className="fw-bold">${product.price.toFixed(2)}</h4>
          <p className="mt-3">{product.description}</p>


          {cartItem ? (
            <div className="d-flex align-items-center mt-3">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => dispatch(decreaseQuantity(product.id))}
                disabled={quantity <= 1}
              >
                −
              </button>
              <span className="mx-3">{quantity}</span>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => dispatch(increaseQuantity(product.id))}
              >
                +
              </button>
            </div>
          ) : null}

    
          {cartItem ? (
            <button
              className="btn btn-danger mt-3 w-100"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="btn btn-success mt-3 w-100"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          )}

         
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
