import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { navigate } from "@reach/router";

const Update = (props) => {
  const [myForm, setMyForm] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pet/${props._id}`)
      .then((res) => setMyForm(res.data))
      .catch((err) => console.log("Something wrong while update", err));
  }, []);
  const [error, setError] = useState({});
  const onChangeHandler = (e) => {
    setMyForm({ ...myForm, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/pet/update/${props._id}`, myForm)
      .then((res) => {
        if (res.data.error) {
          setError(res.data.error.errors);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Form
        myForm={myForm}
        error={error}
        onChangeHandler={onChangeHandler}
        submitHandler={submitHandler}
      />
    </>
  );
};
export default Update;
