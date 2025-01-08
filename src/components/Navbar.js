import BadgeIcon from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useCart } from "./ContextReducer";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function NavbarMenu(props) {
  const [cartView, setCartView] = useState(false);
  localStorage.setItem("temp", "first");
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  const loadCart = () => {
    setCartView(true);
  };

  // const items = useCart();
  return (
    <div>
      <Navbar
        expand="lg"
        bg="danger"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-1 fst-italic">
            Let's Eat
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-content" />
          <Navbar.Collapse id="navbar-content">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className=" mx-1 mx-lg-3 text-white">
                Home
              </Nav.Link>
              {localStorage.getItem("token") && (
                <Nav.Link as={Link} to="/myorder" className="mx-1 mx-lg-3 text-white">
                  My Orders
                </Nav.Link>
              )}
            </Nav>
            <Nav className="d-block w-sm-50 w-lg-100">
              {!localStorage.getItem("token") ? (
                <>
                  <Button
                    as={Link}
                    to="/login"
                    variant="light"
                    className="bg-success mx-1"
                    // size="sm"
                  >
                    Login
                  </Button>
                  <Button
                    as={Link}
                    to="/signup"
                    variant="light"
                    className="bg-success mx-1"
                    // size="sm"
                  >
                    Signup
                  </Button>
                </>
              ) : (
                <>
                  <Nav className="d-block align-items-start">
                    <Button
                      variant="light"
                      className="bg-success   "
                      onClick={loadCart}
                    >
                      <BadgeIcon>
                        <ShoppingCartIcon />
                      </BadgeIcon>
                      <span className="ms-1">Cart</span>
                    </Button>
                    {cartView && (
                      <Modal onClose={() => setCartView(false)}>
                        <Cart />
                      </Modal>
                    )}
                    <Button
                      variant="light"
                      className="bg-success ms-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </Nav>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    // <nav
    //     className="navbar navbar-expand-lg navbar-dark bg-danger position-sticky"
    //     style={{
    //       boxShadow: "0px 10px 20px black",
    //       filter: "blur(20)",
    //       position: "fixed",
    //       zIndex: "10",
    //       width: "100%",
    //     }}
    //   >
    //     <div className="container-fluid">
    //       <Link className="navbar-brand fs-1 fst-italic" to="/">
    //         Let's Eat
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link
    //               className="nav-link fs-5 mx-3 active"
    //               aria-current="page"
    //               to="/"
    //             >
    //               Home
    //             </Link>{" "}
    //           </li>
    //           {localStorage.getItem("token") ? (
    //             <li className="nav-item">
    //               <Link
    //                 className="nav-link fs-5 mx-3 active"
    //                 aria-current="page"
    //                 to="/myorder"
    //               >
    //                 My Orders
    //               </Link>{" "}
    //             </li>
    //           ) : (
    //             ""
    //           )}
    //         </ul>
    //         {!localStorage.getItem("token") ? (
    //           <form className="d-flex">
    //             <Link className="btn bg-white text-danger mx-1 " to="/login">
    //               Login
    //             </Link>
    //             <Link className="btn bg-white text-danger mx-1" to="/signup">
    //               Signup
    //             </Link>
    //           </form>
    //         ) : (
    //           <div>
    //             <div
    //               className="btn bg-white text-success mx-2 "
    //               onClick={loadCart}
    //             >
    //               <BadgeIcon color="secondary" >
    //                 <ShoppingCartIcon />
    //               </BadgeIcon>
    //               Cart
    //             </div>

    //             {cartView ? (
    //               <Modal onClose={() => setCartView(false)}>
    //                 <Cart></Cart>
    //               </Modal>
    //             ) : (
    //               ""
    //             )}

    //             <button
    //               onClick={handleLogout}
    //               className="btn bg-white text-success"
    //             >
    //               Logout
    //             </button>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </nav>
  );
}
