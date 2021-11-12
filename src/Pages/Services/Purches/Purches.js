import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";
import useAuth from "../../../Hooks/UseAuth";
import { useForm } from "react-hook-form";
import "./Purches.css";

const Purches = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`https://rocky-spire-67660.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  useEffect(() => {
    reset();
  }, [product]);

  const onSubmit = (data) => {
    fetch("https://rocky-spire-67660.herokuapp.com/purches", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data, status: "Pending" }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          alert("order processed successfully");
          reset();
        }
      });
  };

  return (
    <div className="container my-4">
      <Grid style={{ backgroundColor: "#efefef" }} container spacing={2}>
        <Grid className="my-3" item xs={12} md={6}>
          <Card className="mx-auto" style={{ width: "28rem" }}>
            <Card.Img className="p-3" variant="top" src={product?.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>

              <Card.Text>{product.desc}</Card.Text>
              <Card.Title>Price: {product.price}$</Card.Title>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-75 h-5 mt-3"
              defaultValue={user?.displayName}
              {...register("name")}
            />
            <input
              className="w-75 h-5 mt-3"
              defaultValue={user?.email}
              {...register("email")}
            />
            <input
              className="w-75 h-5 mt-3"
              defaultValue={product?.name}
              {...register("productName", { required: true })}
            />
            <input
              className="w-75 h-5 mt-3"
              defaultValue={product?.price}
              placeholder="price"
              {...register("price", { required: true })}
            />

            <input
              className="w-75 h-5 mt-3"
              defaultValue=""
              placeholder="phone number"
              {...register("phone", { required: true })}
              required
            />
            <input
              className="w-75 h-5 mt-3"
              defaultValue=""
              placeholder="location"
              {...register("location", { required: true })}
              required
            />
            <br />
            <br />
            <Button type="submit" variant="contained">
              purches
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Purches;
