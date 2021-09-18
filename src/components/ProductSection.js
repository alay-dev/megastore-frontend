import React, { Component } from "react";
import {
  IconButton,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Modal,
} from "@material-ui/core";

export default class ProductSection extends Component {
  constructor(props) {
    super(props);
    this.state = { add_modal: false };
  }
  render() {
    const {
      product,
      set_product_category,
      set_product_desciption,
      set_product_discount,
      set_product_img,
      set_product_name,
      set_product_onoffer,
      set_product_price,
      set_product_ratings_average,
      add_product,
    } = this.props;
    return (
      <div className="dashboard__section">
        <h5>Manage products</h5>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <button
            className="btn btn-secondary"
            onClick={() => this.setState({ add_modal: true })}
          >
            Add new product
          </button>
        </div>
        <br />

        <TableContainer component={Paper} className="table__cont">
          <Table stickyHeader size="small" aria-label="simple table">
            <TableHead style={{ backgroundColor: "#56cc9d" }}>
              <TableRow>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                >
                  #
                </TableCell>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                >
                  Product Name
                </TableCell>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                  align="center"
                >
                  Category
                </TableCell>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                  align="center"
                >
                  Price
                </TableCell>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                  align="center"
                >
                  Discount
                </TableCell>
                <TableCell
                  style={{ color: "#000", backgroundColor: "#56cc9d" }}
                  align="center"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log(product)}
              {product.all_products.map((row, i) => {
                return (
                  <React.Fragment>
                    <TableRow>
                      <TableCell
                        style={{
                          color: "#000",
                          fontWeight: "700",
                          fontSize: "1rem",
                        }}
                      >
                        {++i}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                      <TableCell align="center">{row.discount}</TableCell>
                      <TableCell
                        style={{
                          display: "flex",
                          gap: "1rem",
                          justifyContent: "center",
                        }}
                      >
                        <IconButton size="small">
                          <i className="fas fa-trash-alt" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={(e) => this.setState({ edit_modal: true })}
                        >
                          <i className="fas fa-pencil-alt" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                    <Modal
                      open={this.state.edit_modal}
                      onClose={() => this.setState({ edit_modal: false })}
                    >
                      <div>
                        <div class="modal-dialog container" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title">Edit products</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() =>
                                  this.setState({ edit_modal: false })
                                }
                              >
                                <span aria-hidden="true"></span>
                              </button>
                            </div>
                            <div
                              class="modal-body"
                              style={{ overflowY: "scroll", height: "70vh" }}
                            >
                              <div class="form-group">
                                <label for="productName" class="form-label ">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="productName"
                                  placeholder="Enter product name"
                                  value={row.name}
                                  onChange={(e) =>
                                    set_product_name(e.target.value)
                                  }
                                />
                              </div>
                              <div class="form-group">
                                <label for="formFile" class="form-label mt-1">
                                  Choose product image
                                </label>
                                <input
                                  class="form-control"
                                  type="file"
                                  id="formFile"
                                  onChange={(e) =>
                                    set_product_img(e.target.files[0])
                                  }
                                />
                              </div>
                              <fieldset className="mt-3 mb-2">
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckDefault"
                                    defaultChecked={row.onOffer}
                                    onChange={(e) => {
                                      set_product_onoffer(e.target.checked);
                                    }}
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexSwitchCheckDefault"
                                  >
                                    Set on offer
                                  </label>
                                </div>
                              </fieldset>
                              <div className="row">
                                <div className="col">
                                  <div class="form-group">
                                    <label
                                      for="exampleInputPassword1"
                                      class="form-label mt-1"
                                    >
                                      Price
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="exampleInputPassword1"
                                      placeholder="Enter product price"
                                      value={row.price}
                                      onChange={(e) =>
                                        set_product_price(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col">
                                  <div class="form-group">
                                    <label class="form-label mt-1">
                                      Discount
                                    </label>
                                    <div class="form-group">
                                      <div class="input-group">
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Enter discount"
                                          value={row.discount}
                                          onChange={(e) =>
                                            set_product_discount(e.target.value)
                                          }
                                        />
                                        <span class="input-group-text">
                                          % OFF
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div class="form-group">
                                    <label
                                      for="exampleSelect1"
                                      class="form-label mt-1"
                                    >
                                      Select category
                                    </label>
                                    <select
                                      class="form-select"
                                      id="exampleSelect1"
                                      value={row.category}
                                      onChange={(e) =>
                                        set_product_category(e.target.value)
                                      }
                                    >
                                      <option>Choose category</option>
                                      <option>Fruits & vegetables</option>
                                      <option>Eggs, Seafood & meat</option>
                                      <option>Beverages</option>
                                      <option>Bakery</option>
                                      <option>Foodgrains, oil & spices</option>
                                      <option>Snacks & Packaged Food</option>
                                      <option>Household</option>
                                      <option>Personal car & cosmetics</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col">
                                  <div class="form-group">
                                    <label
                                      for="exampleInputPassword1"
                                      class="form-label mt-1"
                                    >
                                      Average Ratings
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="exampleInputPassword1"
                                      placeholder="Enter Ratings"
                                      value={row.ratings_average}
                                      onChange={(e) =>
                                        set_product_ratings_average(
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="form-group">
                                <label
                                  for="exampleTextarea"
                                  class="form-label mt-1"
                                >
                                  Description
                                </label>
                                <textarea
                                  class="form-control"
                                  id="exampleTextarea"
                                  rows="5"
                                  value={row.description}
                                  onChange={(e) =>
                                    set_product_desciption(e.target.value)
                                  }
                                ></textarea>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-primary"
                                onClick={() => {
                                  add_product(product);
                                  this.setState({ edit_modal: false });
                                }}
                              >
                                ADD
                              </button>
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                  this.setState({ edit_modal: false });
                                }}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          open={this.state.add_modal}
          onClose={() => this.setState({ add_modal: false })}
        >
          <div>
            <div class="modal-dialog container" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Add new products</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => this.setState({ add_modal: false })}
                  >
                    <span aria-hidden="true"></span>
                  </button>
                </div>
                <div
                  class="modal-body"
                  style={{ overflowY: "scroll", height: "70vh" }}
                >
                  <div class="form-group">
                    <label for="productName" class="form-label ">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="productName"
                      placeholder="Enter product name"
                      value={product.name}
                      onChange={(e) => set_product_name(e.target.value)}
                    />
                  </div>
                  <div class="form-group">
                    <label for="formFile" class="form-label mt-1">
                      Choose product image
                    </label>
                    <input
                      class="form-control"
                      type="file"
                      id="formFile"
                      onChange={(e) => set_product_img(e.target.files[0])}
                    />
                  </div>
                  <fieldset className="mt-3 mb-2">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onChange={(e) => {
                          set_product_onoffer(e.target.checked);
                        }}
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Set on offer
                      </label>
                    </div>
                  </fieldset>
                  <div className="row">
                    <div className="col">
                      <div class="form-group">
                        <label
                          for="exampleInputPassword1"
                          class="form-label mt-1"
                        >
                          Price
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter product price"
                          value={product.price}
                          onChange={(e) => set_product_price(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div class="form-group">
                        <label class="form-label mt-1">Discount</label>
                        <div class="form-group">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter discount"
                              value={product.discount}
                              onChange={(e) =>
                                set_product_discount(e.target.value)
                              }
                            />
                            <span class="input-group-text">% OFF</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div class="form-group">
                        <label for="exampleSelect1" class="form-label mt-1">
                          Select category
                        </label>
                        <select
                          class="form-select"
                          id="exampleSelect1"
                          onChange={(e) => set_product_category(e.target.value)}
                        >
                          <option>Choose category</option>
                          <option>Fruits & vegetables</option>
                          <option>Eggs, Seafood & meat</option>
                          <option>Beverages</option>
                          <option>Bakery</option>
                          <option>Foodgrains, oil & spices</option>
                          <option>Snacks & Packaged Food</option>
                          <option>Household</option>
                          <option>Personal car & cosmetics</option>
                        </select>
                      </div>
                    </div>
                    <div className="col">
                      <div class="form-group">
                        <label
                          for="exampleInputPassword1"
                          class="form-label mt-1"
                        >
                          Average Ratings
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Ratings"
                          value={product.ratings_average}
                          onChange={(e) =>
                            set_product_ratings_average(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-1">
                      Description
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleTextarea"
                      rows="5"
                      value={product.description}
                      onChange={(e) => set_product_desciption(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      add_product(product);
                      this.setState({ add_modal: false });
                    }}
                  >
                    ADD
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      this.setState({ add_modal: false });
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
