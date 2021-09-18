import React, { Component } from "react";
import item1 from "../img/1.jpg";

export default class Wishlist extends Component {
  render() {
    return (
      <div className="wishlist">
        <h5>Wishlist</h5>
        <div className="table__cont">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="row__cont item_name">
                    <img src={item1} />
                    <p>Mohakosh oil</p>
                  </div>
                </td>
                <td>
                  <div className="row__cont">
                    <h5>&#8377; 52.00</h5>
                  </div>
                </td>
                <td>
                  <div className="row__cont">
                    <p style={{ marginBottom: "0" }}>
                      <i
                        className="fas fa-trash"
                        style={{ fontSize: "1rem " }}
                      />
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row__cont item_name">
                    <img src={item1} />
                    <p>Mohakosh oil</p>
                  </div>
                </td>

                <td>
                  <div className="row__cont">
                    <h5>&#8377; 52.00</h5>
                  </div>
                </td>
                <td>
                  <div className="row__cont">
                    <p style={{ marginBottom: "0" }}>
                      <i
                        className="fas fa-trash"
                        style={{ fontSize: "1rem " }}
                      />
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row__cont item_name">
                    <img src={item1} />
                    <p>Mohakosh oil</p>
                  </div>
                </td>

                <td>
                  <div className="row__cont">
                    <h5>&#8377; 52.00</h5>
                  </div>
                </td>
                <td>
                  <div className="row__cont">
                    <p style={{ marginBottom: "0" }}>
                      <i
                        className="fas fa-trash"
                        style={{ fontSize: "1rem " }}
                      />
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
