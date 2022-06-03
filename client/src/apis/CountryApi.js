import axios from "axios";
import { fillTextAction } from "../redux/Slices/countrySlice";

export const getCountry = () => {
  return (dispatch) => {
    axios.get(`http://localhost:5000/api/allcountries`).then((res) => {
      dispatch(fillTextAction(res.data));
    });
  };
};
