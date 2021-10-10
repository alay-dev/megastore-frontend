import React from "react";
import { useEffect } from "react";

function Cart({
  cart,
  login,
  add_to_cart,
  increase_quantity,
  decrease_quantity,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <th scope="col">Price</th>
                {/* <th scope="col" /> */}
              </tr>
            </thead>
            <tbody>
              {cart?.items?.map((row) => {
                return (
                  <tr>
                    <td>
                      <div className="row__cont item_name">
                        <img src={row.productImage} alt={row.productName} />
                        <p>{row.productName}</p>
                      </div>
                    </td>
                    <td>
                      <div className="row__cont quantity">
                        <button
                          className="btn btn-outline-dark text-primary"
                          onClick={() =>
                            decrease_quantity(row.productId, login)
                          }
                        >
                          <i class="fas fa-minus" />
                        </button>
                        <p className="amount">{row.quantity}</p>
                        <button
                          className="btn btn-outline-dark text-primary"
                          onClick={() =>
                            increase_quantity(row.productId, login)
                          }
                        >
                          <i class="fas fa-plus" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="row__cont">
                        <h5>&#8377; {row.productPrice * row.quantity}</h5>
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
