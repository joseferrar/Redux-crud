import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPet } from "../apis/CountryApi";
import { fillTextAction, fillTextSelector } from "../redux/Slices/countrySlice";

function TestComponent() {
  const dispatch = useDispatch();
  const  fillText  = useSelector((state)=> state.country)
  console.log(fillText);

  useEffect(() => {
      dispatch(getPet())
  },[])

  console.log(fillText)
  return (
    <div>
      <h1> test</h1>
    </div>
  );
}

export default TestComponent;
