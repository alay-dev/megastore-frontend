import React, { useState } from "react";
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
} from "@mui/material";

function ProductSection({
  login,
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
  update_product,
  delete_product,
}) {
  const [add_modal, setAddModal] = useState(false);
  const [edit_modal, setEditModal] = useState(false);
  const [delete_modal, setDeleteModal] = useState(false);
  const [product_id, setProductId] = useState("");

  return (
    <div className="dashboard__section">
      <h5>Manage products</h5>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <button className="btn btn-secondary" onClick={() => setAddModal(true)}>
          Add new product
        </button>
      </div>
      <br />

      <TableContainer component={Paper} className="table__cont">
        <Table stickyHeader size="small" aria-label="simple table">
          <TableHead style={{ backgroundColor: "#56cc9d" }}>
            <TableRow>
              <TableCell style={{ color: "#000", backgroundColor: "#56cc9d" }}>
                #
              </TableCell>
              <TableCell style={{ color: "#000", backgroundColor: "#56cc9d" }}>
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
                      <IconButton
                        size="small"
                        onClick={() => {
                          setProductId(row._id);
                          setDeleteModal(true);
                        }}
                      >
                        <i className="fas fa-trash-alt" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          set_product_name(row.name);
                          set_product_category(row.category);
                          set_product_desciption(row.description);
                          set_product_discount(row.discount);
                          set_product_onoffer(row.onOffer);
                          set_product_ratings_average(row.ratingsAverage);
                          set_product_price(row.price);
                          setProductId(row._id);

                          setEditModal(true);
                        }}
                      >
                        <i className="fas fa-pencil-alt" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <Modal
                    open={delete_modal}
                    onClose={() => setDeleteModal(false)}
                  >
                    <div>
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Delete product</h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              onClick={() => setDeleteModal(false)}
                            >
                              <span aria-hidden="true"></span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <h6> Are you sure you want to delete?</h6>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={() => {
                                delete_product(product_id);
                                setDeleteModal(false);
                              }}
                            >
                              Delete
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                              onClick={() => {
                                setDeleteModal(false);
                              }}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                  <Modal open={edit_modal} onClose={() => setEditModal(false)}>
                    <div>
                      <div class="modal-dialog " role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Edit products</h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              onClick={() => setEditModal(false)}
                            >
                              <span aria-hidden="true"></span>
                            </button>
                          </div>
                          <div
                            className="modal-body"
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
                                  defaultChecked={product.on_offer}
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
                                        value={product.discount}
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
                                    value={product.category}
                                    onChange={(e) =>
                                      set_product_category(e.target.value)
                                    }
                                  >
                                    <option>Choose category</option>
                                    <option value="fruit_and_vegetable">
                                      Fruits & vegetables
                                    </option>
                                    <option value="seafood_and_meat">
                                      Eggs, Seafood & meat
                                    </option>
                                    <option value="beverage">Beverages</option>
                                    <option value="bakery">Bakery</option>
                                    <option value="foodgrain_and_spice">
                                      Foodgrains, oil & spices
                                    </option>
                                    <option value="snack">
                                      Snacks & Packaged Food
                                    </option>
                                    <option value="household">Household</option>
                                    <option value="personalcare_and_cosmetic">
                                      Personal car & cosmetics
                                    </option>
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
                                update_product(product_id, product, login);
                                setEditModal(false);
                              }}
                            >
                              Update
                            </button>
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                              onClick={() => {
                                setEditModal(false);
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
      <Modal open={add_modal} onClose={() => setAddModal(false)}>
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
                  onClick={() => setAddModal(false)}
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
                        <option value="fruit_and_vegetable">
                          Fruits & vegetables
                        </option>
                        <option value="seafood_and_meat">
                          Eggs, Seafood & meat
                        </option>
                        <option value="beverage">Beverages</option>
                        <option value="bakery">Bakery</option>
                        <option value="foodgrain_and_spice">
                          Foodgrains, oil & spices
                        </option>
                        <option value="snack">Snacks & Packaged Food</option>
                        <option value="household">Household</option>
                        <option value="personalcare_and_cosmetic">
                          Personal car & cosmetics
                        </option>
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
                    setAddModal(false);
                  }}
                >
                  ADD
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setAddModal(false);
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

export default ProductSection;
