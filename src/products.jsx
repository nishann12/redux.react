import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./CartSlice";
import { useNavigate } from "react-router-dom";

export const products = [
    {
      id: 1,
      name: "Gray Shirt",
      size: "M/L/XL",
      price: 49.99,
      description: "A stylish Gray shirt that fits perfectly for casual and formal wear.",
      image: "https://www.hoooyi.com/cdn/shop/files/jpg_1b845c56-b92e-4fc2-9548-a79a8a565b32.jpg?v=1715358779",
    },
    {
      id: 2,
      name: "Floral Shirt",
      size: "One Size",
      price: 59.99,
      description: "A vibrant floral shirt that brings a tropical touch to your outfit.",
      image: "https://i5.walmartimages.com/asr/f2b2f10a-bb82-4e56-b00f-1d62403a8745.88770b4b980e717e1f0340394cb95965.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      id: 3,
      name: "Brown Shirt",
      size: "M/L/XL",
      price: 45.99,
      description: "A cool brown shirt, comfortable for daily wear with a classic look.",
      image: "https://i5.walmartimages.com/seo/Grianlook-Mens-Regular-Fit-Button-Down-T-Shirt-Short-Sleeve-Solid-Color-Shirts-Work-Pockets-Tops_41e710fa-d5f9-4d7f-b58a-2cfb3cd42aa4.6ebd04c88a55a12928a78834414b5cd4.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    },
    {
      id: 4,
      name: "Cream Shirt",
      size: "One Size",
      price: 52.99,
      description: "A premium Cream shirt that enhances your elegant and smart look.",
      image: "https://i5.walmartimages.com/seo/WXLWZYWL-Plus-Size-Shirt-Men-Clearance-Men-s-Short-Sleeve-Oxford-Cotton-Regular-Fit-Button-Down-Collar-Solid-Color-Casual-Loose-Shirts-Pocket-Khaki-L_94b63ea8-9679-46dd-ba7b-8f631f29ac20.fcfa28612b3deb041e519fa7650261a8.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    },
  ];
const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {products.map((product) => {
          const isInCart = cart.some((item) => item.id === product.id);

          return (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "300px", objectFit: "cover", cursor: "pointer" }}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
                <div className="card-body">
                  <h6 className="card-title text-start">{product.name}</h6>
                  <p className="card-text text-muted text-start">{product.size}</p>
                  <p className="card-text fw-bold text-start">${product.price.toFixed(2)}</p>
                  
                  
                  <div className="d-flex justify-content-between">
                    <span></span> 
                    {isInCart ? (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        Remove From Cart
                      </button>
                    ) : (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => dispatch(addToCart(product))}
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
