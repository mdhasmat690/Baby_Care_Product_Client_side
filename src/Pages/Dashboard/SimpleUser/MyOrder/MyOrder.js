import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/UseAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const MyOrder = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState();
  useEffect(() => {
    const url = `https://rocky-spire-67660.herokuapp.com/purches/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`https://rocky-spire-67660.herokuapp.com/purches/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete complet");
            const deleteData = order?.filter((pb) => pb._id !== id);
            setOrder(deleteData);
          }
        });
    }
  };

  return (
    <div className="mt-3">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>status</TableCell>
              <TableCell>Cancel Order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order?.map((orders) => (
              <TableRow
                key={orders._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {orders.name}
                </TableCell>
                <TableCell>{orders.productName}</TableCell>
                <TableCell>{orders.price}</TableCell>
                <TableCell>
                  <Typography variant="button" gutterBottom component="div">
                    {orders.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(orders._id)}
                    variant="contained"
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrder;
