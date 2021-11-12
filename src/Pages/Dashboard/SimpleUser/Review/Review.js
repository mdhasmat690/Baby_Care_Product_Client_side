import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../../../Hooks/UseFirebase";
import "./Review.css";

const Review = () => {
  const { register, handleSubmit,reset } = useForm();
  const { user } = useFirebase();

  const onSubmit = (data) => {
    fetch("https://rocky-spire-67660.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) =>{
        if (result.insertedId) {
          alert("Review Added successfully");
          reset();
        }
      });

    console.log(data);
  };

  return (
    <div className="review-style-bg mt-4">
      <h2>Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-50 height-3"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <br />
        <input
          className="w-50 height-3"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />
        <br />
        <input
          className="w-50 height-3"
          name="comments"
          placeholder="Ratting 0 to 5"
          {...register("number", { required: true, min: 0, max: 5 })}
        />
        <br />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3 my-5"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Review;
