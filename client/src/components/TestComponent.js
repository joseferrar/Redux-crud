import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getCountry, deleteCountry } from "../apis/CountryApi";
import TestModal from "./TestModal";

function TestComponent() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <div>
      <TestModal open={open} setOpen={setOpen} />
      <div style={{ marginLeft: 50, marginRight: 50, marginTop: 50 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Flag</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data?.data?.length > 0 &&
                data?.data?.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Avatar
                        alt="Remy Sharp"
                        src={item?.flag}
                        sx={{ width: 35, height: 35 }}
                      />
                    </TableCell>
                    <TableCell>{item?.countryName}</TableCell>
                    <TableCell>{item?.countryCode}</TableCell>
                    <TableCell>
                      {" "}
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          dispatch(deleteCountry(item?._id));
                          dispatch(getCountry());
                          window.location.reload();
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default TestComponent;
