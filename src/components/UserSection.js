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

function UserSection({ user }) {
  return (
    <div className="dashboard__section">
      <h5>Manage Users</h5>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <button className="btn btn-secondary">Add new user</button>
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
                User Name
              </TableCell>
              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Email
              </TableCell>
              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Phone Number
              </TableCell>
              <TableCell
                style={{ color: "#000", backgroundColor: "#56cc9d" }}
                align="center"
              >
                Address
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
            {user?.all_users?.map((row, i) => {
              if (row?.type === "U") {
                return (
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
                      {row.name ? row.name : ""}
                    </TableCell>

                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">
                      {row.contact_no ? row.contact_no : ""}
                    </TableCell>
                    <TableCell align="center">
                      {row.address ? row.address : ""}
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
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserSection;
