import React, { useState, useEffect } from "react";

import SnackBar from "../components/Snackbar";

export default function Checkout({
  login,
  cart,
  snackbar,
  place_order,
  set_snackbar_status,
}) {
  const [cartTotal, setCartTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cartItem, setCartItem] = useState([]);
  const [cartId, setCartId] = useState("");
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

  useEffect(() => {
    let tmpCart = [];
    cart?.items?.map((item) => {
      let tmp = {
        item: item.productId,
        quantity: item.quantity,
      };

      tmpCart.push(tmp);
      return null;
    });
    setCartItem(tmpCart);
    setCartId(cart?._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <div className="checkout">
      <h4>Billing details</h4>
      <div className="cont__">
        <div className="checkout__left card border-info">
          <div className="card-body">
            <p style={{ textAlign: "end" }}>
              <i className="fas fa-pen" />
            </p>
            <h6 className="text-dark lead">Alay Naru</h6>
            {/* <p className="address"> */}
            <form>
              <div class="form-group">
                <label for="exampleSelect2" class="form-label mt-4">
                  Delivery to :
                </label>
                <select multiple="" class="form-select" id="exampleSelect2">
                  <option>Home</option>
                  <option>Work</option>
                  <option>Other</option>
                </select>
              </div>
            </form>
            {/* </p> */}
            <div className="contact_cont">
              <p className="text-primary">
                <em>{login?.contact_no}</em>
              </p>
              <p>&bull;</p>
              <p className="text-primary">
                <em>narualay030@gmail.com</em>
              </p>
            </div>
          </div>
        </div>
        <div className="checkout__right card border-info">
          <div className="card-body">
            <h5 className="text-dark">Cart total</h5>
            <div className="row__">
              <p>Subtotal</p>
              <p>&#8377; {cartTotal}</p>
            </div>
            <div className="row__">
              <p>Discount</p>
              <p>-&#8377; {discount}</p>
            </div>
            <div className="row__">
              <p>Delivery</p>
              <p>+&#8377; 10.00</p>
            </div>
            <div className="row__ final">
              <p>Total</p>
              <p>&#8377; {cartTotal - discount + 10}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="payment">
        <h4>Payment method</h4>
        <form>
          <fieldset class="form-group">
            <div class="form-check">
              <label class="form-check-label">
                <input
                  disabled
                  type="radio"
                  class="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios1"
                  value="option1"
                  onClick={() => setPaymentMethod("upi")}
                />
                UPI
              </label>
            </div>

            <div class="form-check">
              <label class="form-check-label">
                <input
                  disabled
                  type="radio"
                  class="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios2"
                  value="option2"
                  onClick={() => setPaymentMethod("paypal")}
                />
                Paypal
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios3"
                  value="option3"
                  onClick={() => setPaymentMethod("cod")}
                />
                Cash on delivery
              </label>
            </div>
          </fieldset>

          {/* <fieldset style={{ marginTop: "1.5rem " }} class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                checked=""
              />
              <label class="form-check-label" for="flexCheckChecked">
                I have read and accept the terms and conditions
              </label>
            </div>
          </fieldset> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              place_order(cartItem, cartId, paymentMethod, login);
            }}
            className="btn btn-dark"
          >
            PLACE ORDER
          </button>
        </form>
      </div>
      <SnackBar snackbar={snackbar} set_snackbar_status={set_snackbar_status} />
    </div>
  );
}
