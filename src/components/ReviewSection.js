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
} from "@mui/material";

function ReviewSection() {
  return (
    <div className="dashboard__section">
      <h5>Manage Reviews</h5>
      {/* <div
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <button className="btn btn-secondary">Add new product</button>
        </div> */}
      <br />

      <TableContainer component={Paper} className="table__cont">
        <Table stickyHeader size="small" aria-label="simple table">
          <TableHead style={{ backgroundColor: "#56cc9d" }}>
            <TableRow>
              <TableCell style={{ color: "#000", backgroundColor: "#56cc9d" }}>
                #
              </TableCell>
              <TableCell style={{ color: "#000", backgroundColor: "#56cc9d" }}>
                User
              </TableCell>
              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Comment
              </TableCell>
              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Product
              </TableCell>
              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Rating
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
            <TableRow>
              <TableCell
                style={{
                  color: "#000",
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
              >
                1
              </TableCell>
              <TableCell component="th" scope="row">
                user name
              </TableCell>

              <TableCell align="center">Nice product</TableCell>
              <TableCell align="center">Cold drink</TableCell>
              <TableCell align="center">4.5</TableCell>
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
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ReviewSection;
