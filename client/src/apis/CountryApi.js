import { REACT_URL } from ".";
import { fillTextAction } from "../redux/Slices/countrySlice";

export const getCountry = () => {
  return (dispatch) => {
    REACT_URL.get(`/allcountries`).then((res) => {
      dispatch(fillTextAction(res.data));
    });
  };
};

export const AddCountry = (data) => {
  return (dispatch) => {
    REACT_URL.post("/addcountry", data).then((res) => {
      dispatch(fillTextAction(res.data));
    });
  };
};

export const deleteCountry = (id) => {
  return (dispatch) => {
    REACT_URL.delete(`/countrydel/${id}`).then((res) => {
      dispatch(fillTextAction(res.data));
    });
  };
};

export const searchCountry = (name) => {
  return (dispatch) => {
    REACT_URL.get(`/searchCountry?countryName=${name}`).then((res) => {
      dispatch(fillTextAction(res.data));
    });
  };
};
