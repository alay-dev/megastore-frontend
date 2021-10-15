import React from "react";
import {
  IconButton,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Dialog,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { useState } from "react";

function OrderSection({ order }) {
  const [idDialog, setIdDialog] = useState(false);
  const [itemDialog, setItemDialog] = useState(false);
  return (
    <div className="dashboard__section">
      <h5>Manage Orders</h5>
      {/* <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <button className="btn btn-secondary">Add new order</button>
        </div> */}
      <br />

      <TableContainer
        component={Paper}
        className="table__cont"
        style={{ height: "34rem" }}
      >
        <Table stickyHeader size="small" aria-label="simple table">
          <TableHead style={{ backgroundColor: "#56cc9d" }}>
            <TableRow>
              <TableCell style={{ color: "#000", backgroundColor: "#56cc9d" }}>
                #
              </TableCell>
              <TableCell style={{ color: "#000", backgroundColor: "#56cc9d" }}>
                Order ID
              </TableCell>

              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Items
              </TableCell>
              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Payment Method
              </TableCell>
              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Ordered Date
              </TableCell>
              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Total Price
              </TableCell>
              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Delivered
              </TableCell>
              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.all_order.map((row, i) => {
              return (
                <TableRow key={uuidv4()}>
                  <TableCell
                    style={{
                      color: "#000",
                      fontWeight: "700",
                      fontSize: "1rem",
                    }}
                  >
                    {i++}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ width: "10rem" }}
                  >
                    <IconButton size="small" onClick={() => setIdDialog(true)}>
                      <i className="fas fa-align-justify" />
                    </IconButton>
                  </TableCell>
                  <Dialog open={idDialog} onClose={() => setIdDialog(false)}>
                    <div style={{ padding: "2rem " }}>
                      <p>Order ID : {row.orderId}</p>
                    </div>
                  </Dialog>

                  <TableCell align="center">
                    <IconButton
                      size="small"
                      onClick={() => setItemDialog(true)}
                    >
                      <i className="fas fa-shopping-bag" />
                    </IconButton>
                  </TableCell>
                  <Dialog
                    open={itemDialog}
                    onClose={() => setItemDialog(false)}
                  >
                    <div style={{ padding: "2rem " }}>
                      <p>Order ID : {row.orderId}</p>
                    </div>
                  </Dialog>
                  <TableCell align="center">{row.paymentMethod}</TableCell>
                  <TableCell align="center">
                    {moment(row.orderDate).format("MMM Do YY")}
                  </TableCell>
                  <TableCell align="center">{row.totalPrice}</TableCell>
                  <TableCell align="center">
                    <IconButton size="small">
                      {row.isDelivered ? (
                        <i className="fas fa-check-square" />
                      ) : (
                        <i className="fas fa-window-close" />
                      )}
                    </IconButton>
                  </TableCell>
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
                    <IconButton size="small">
                      <i className="fas fa-pencil-alt" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default OrderSection;
