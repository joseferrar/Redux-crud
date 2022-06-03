import * as React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function TestModal(props) {
  const { open, setOpen } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      countryName: "",
      countryCode: "",
      flag: "",
    },
    validationSchema: yup.object({
      countryName: yup.string().required("countryName is required"),
      countryCode: yup.string().required("countryCode is required"),
      flag: yup.string().required("flag is required"),
    }),
    onSubmit: async (data) => {
      console.log(data);
    },
  });

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        style={{ marginLeft: "auto" }}
      >
        Add Country
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="countryName"
            label="Country"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.countryName}
            onChange={formik.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="countryCode"
            label="Code"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.countryCode}
            onChange={formik.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="flag"
            label="flag url"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.flag}
            onChange={formik.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={formik.handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TestModal;
