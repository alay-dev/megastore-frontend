import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function SnackBar({ snackbar, set_snackbar_status }) {
  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    set_snackbar_status(false);
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={snackbar?.status}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity={snackbar?.severity} onClose={handleClose}>
          {snackbar?.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SnackBar;
