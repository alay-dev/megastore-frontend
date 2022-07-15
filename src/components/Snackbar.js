import React from "react";
import { Snackbar, Alert } from "@mui/material";
// import MuiAlert from "@mui/material/Alert";

function SnackBar({ snackbar, set_snackbar_status }) {
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    set_snackbar_status(false);
  };

  // const Alert = (props) => {
  //   return <MuiAlert elevation={6} variant="filled" {...props} />;
  // };

  return (
    <div>
      <Snackbar
        // anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbar?.status}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          severity={snackbar?.severity}
          onClose={handleClose}
          variant="filled"
        >
          {snackbar?.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SnackBar;
