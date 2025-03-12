import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={styles.navbar}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={styles.brand}>
          Prosevo
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={styles.navLink}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" style={styles.navLink}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative cart-link" to="/cart" style={styles.navLink}>
                 Cart
                {totalQuantity > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill cart-badge">
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: "linear-gradient(135deg, #007bff, #6610f2)", 
    padding: "15px 0",
    transition: "all 0.3s ease-in-out",
  },
  brand: {
    fontSize: "2rem", 
    fontFamily: "'Poppins', sans-serif", 
    letterSpacing: "1px",
    transition: "color 0.3s ease-in-out",
  },
  navLink: {
    fontSize: "1.1rem",
    color: "white",
    transition: "all 0.3s ease-in-out",
    padding: "8px 15px",
    borderRadius: "5px",
  },
};

// 🔥 Add Hover Effects Using CSS
const hoverStyles = document.createElement("style");
hoverStyles.innerHTML = `
  .navbar:hover {
    background: linear-gradient(135deg, #6610f2, #007bff); /* Slight color change on hover */
  }

  .navbar-brand:hover {
    color: #ffeb3b !important; /* Yellow hover effect */
  }

  .nav-link:hover {
    color: #ffeb3b !important; /* Yellow text on hover */
    background: rgba(255, 255, 255, 0.1); /* Subtle background change */
  }

  .cart-link:hover .cart-badge {
    animation: bounce 0.5s ease-in-out infinite alternate; /* Bouncy cart icon */
  }

  @keyframes bounce {
    0% { transform: scale(1); }
    100% { transform: scale(1.2); }
  }
`;
document.head.appendChild(hoverStyles);

export default Navbar;
