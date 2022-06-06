import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AddCountry, getCountry } from "../apis/CountryApi";

function TestModal(props) {
  const dispatch = useDispatch();
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
      countryName: yup.string().required("Country is required"),
      countryCode: yup.string().required("Code is required"),
      flag: yup.string().required("Flag is required"),
    }),
    onSubmit: async (data) => {
      console.log(data);
      dispatch(AddCountry(data));
      dispatch(getCountry());
      window.location.reload();
    },
  });
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} style={{ top: 40 }}>
        Add Country
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Country</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The Secretary General. Jens Stoltenberg. Biography of NATO Secretary
            General Jens Stoltenberg ·
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
            helperText={
              formik.touched.countryName ? formik.errors.countryName : null
            }
            error={
              formik.touched.countryName ? formik.errors.countryName : null
            }
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
            helperText={
              formik.touched.countryCode ? formik.errors.countryCode : null
            }
            error={
              formik.touched.countryCode ? formik.errors.countryCode : null
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="flag"
            label="Flag url"
            type="text"
            fullWidth
            variant="standard"
            value={formik.values.flag}
            onChange={formik.handleChange}
            helperText={formik.touched.flag ? formik.errors.flag : null}
            error={formik.touched.flag ? formik.errors.flag : null}
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
