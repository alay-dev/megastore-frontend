import React from "react";
import { useEffect } from "react";
import item1 from "../img/1.jpg";

function Cart({ cart, login }) {
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <div className="cart">
        <button className="btn btn-dark btn-lg">Continue</button>
        <br />
        <div className="table__cont">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">quantity</th>
                <th scope="col">Total Price</th>
                {/* <th scope="col" /> */}
              </tr>
            </thead>
            <tbody>
              {cart?.items?.map((row) => {
                return (
                  <tr>
                    <td>
                      <div className="row__cont item_name">
                        <img src={row.productImage} />
                        <p>{row.productName}</p>
                      </div>
                    </td>
                    <td>
                      <div className="row__cont quantity">
                        <button className="btn btn-outline-dark text-primary ">
                          <i class="fas fa-minus" />
                        </button>
                        <p className="amount">{row.quantity}</p>
                        <button className="btn btn-outline-dark text-primary">
                          <i class="fas fa-plus" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="row__cont">
                        <h5>&#8377; {row.productPrice}</h5>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
