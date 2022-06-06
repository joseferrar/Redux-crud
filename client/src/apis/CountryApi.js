import axios from "axios";
import { fillTextAction } from "../redux/Slices/countrySlice";

export const getCountry = () => {
  return (dispatch) => {
    axios.get(`http://localhost:5000/api/allcountries`).then((res) => {
      dispatch(fillTextAction(res.data));
    });
  };
};

export const AddCountry = (data) => {
  return (dispatch) => {
    axios.post("http://localhost:5000/api/addcountry", data).then((res) => {
      dispatch(fillTextAction(res.data));
    });
  };
};

export const deleteCountry = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:5000/api/countrydel/${id}`).then((res) => {
      dispatch(fillTextAction(res.data));
    });
  };
};

export const searchCountry = (name) => {
  return (dispatch) => {
    axios.get(`http://localhost:5000/api/searchCountry?countryName=${name}`).then((res) => {
      dispatch(fillTextAction(res.data));
    });
  };
};
