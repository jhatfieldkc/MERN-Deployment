import React, { useState } from "react";
import Form from "../components/Form";
import axios from "axios";
import { navigate } from "@reach/router";

const Add = (props) => {
  const [myForm, setMyForm] = useState({
    name: "",
    type: "",
    description: "",
    skillOne: "",
    skillTwo: "",
    skillThree: "",
  });
  const [error, setError] = useState({});
  const onChangeHandler = (e) => {
    setMyForm({ ...myForm, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pet/create", myForm)
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
export default Add;
