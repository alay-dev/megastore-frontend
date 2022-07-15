import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emptyCartImg from "../img/emptyCart.svg";
import { Card, Divider, CircularProgress } from "@mui/material";
import ProductImg from "../img/1.jpg";
import SnackBar from "../components/Snackbar";

function Cart({
  cart,
  login,
  loader,
  add_to_cart,
  increase_quantity,
  decrease_quantity,
  remove_from_cart,
  add_to_wishlist,
  ...rest
}) {
  const [cartTotal, setCartTotal] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(cart.items);
    let tmp = 0;
    let tmp2 = 0;

    cart?.items?.map((item) => {
      tmp = tmp + item?.productPrice * item?.quantity;

      let tmp3 = (item?.productDiscount / 100) * item?.productPrice;
      tmp2 = tmp2 + tmp3 * item?.quantity;
      return null;
    });

    tmp2 = Math.floor(tmp2);

    setCartTotal(tmp);
    setDiscount(tmp2);
  }, [cart]);

  return (
    <div className="cart">
      {!loader?.cart_loader && cart?.items?.length === 0 ? (
        <div className="cart__empty">
          <img src={emptyCartImg} alt="" />
          <h4>Nothing in cart. Start Shopping Now</h4>
        </div>
      ) : loader?.cart_loader ? (
        <CircularProgress />
      ) : (
        <>
          <Card>
            <div className="cart__left">
              <div className="cart__left--top">
                <h5>My cart ({cart?.items?.length})</h5>
                {/* <p>Deliver to kol-700104</p> */}
              </div>
              <Divider />
              <div className="cart__left--itemwrapper">
                {cart?.items?.map((row) => {
                  return (
                    <>
                      <div className="cart__left--item">
                        <div className="item__img">
                          <img src={row.productImage} alt={row.productName} />
                          <div className="item__quantity">
                            <div
                              className={
                                row.quantity === 1
                                  ? "item__quantity--btn disable"
                                  : "item__quantity--btn"
                              }
                              onClick={() => {
                                if (row.quantity !== 1) {
                                  decrease_quantity(row.productId, login);
                                }
                              }}
                            >
                              <h4>-</h4>
                            </div>
                            <div className="item__quantity--field">
                              <h5>{row.quantity}</h5>
                            </div>
                            <div
                              className="item__quantity--btn"
                              onClick={() =>
                                increase_quantity(row.productId, login)
                              }
                            >
                              <h4>+</h4>
                            </div>
                          </div>
                        </div>
                        <div className="item__detail">
                          <h6>{row.productName}</h6>
                          <div className="item__detail--price">
                            <h4> &#8377;{row.productPrice} </h4>{" "}
                            <h6 className="text-muted">&#8377; 999</h6>
                          </div>
                          <div className="item__detail--cta">
                            <button
                              type="button"
                              class="btn btn-light"
                              onClick={(e) => {
                                e.stopPropagation();
                                add_to_wishlist(row.productId, login);
                                remove_from_cart(row.productId, login);
                              }}
                            >
                              SAVE FOR LATER
                            </button>
                            <button
                              type="button"
                              class="btn btn-light"
                              onClick={() => {
                                remove_from_cart(row.productId, login);
                              }}
                            >
                              REMOVE
                            </button>
                          </div>
                        </div>
                      </div>
                      <Divider />
                    </>
                  );
                })}
              </div>
              <div className="place__order">
                <Link to={`/checkout`} style={{ textDecoration: "none" }}>
                  <button type="button" class="btn btn-primary">
                    PLACE ORDER
                  </button>
                </Link>
              </div>
            </div>
          </Card>
          <Card>
            <div className="cart__right">
              <div className="cart__right--top">
                {" "}
                <h5 className="text-muted">PRICE DETAILS </h5>
              </div>
              <Divider />
              <div className="cart__right--price">
                <p>Price ({cart?.items?.length} items)</p>
                <p>&#8377; {cartTotal}</p>
              </div>
              <div className="cart__right--price">
                <p>Discount</p>
                <p className="text-success">-&#8377; {discount}</p>
              </div>
              <div className="cart__right--price">
                <p>Delivery</p>
                <p>&#8377; 10</p>
              </div>
              <Divider />
              <div className="cart__right--price">
                <h5>Total Amount</h5>
                <h5>&#8377; {cartTotal - discount + 10}</h5>
              </div>
            </div>
          </Card>
        </>
      )}
      <SnackBar {...rest} />
    </div>
  );
}

export default Cart;
