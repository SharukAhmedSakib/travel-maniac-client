import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./CreatePackage.css";

const CreatePackage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://travel-maniac-server.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  return (
    <div className="add-service">
      <h2>Please Add new Package</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("description")} placeholder="Description" />
        <textarea {...register("duration")} placeholder="duration" />
        <input type="number" {...register("price")} placeholder="price" />
        <input {...register("img")} placeholder="image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreatePackage;
