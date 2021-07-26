import React from "react";
import { Link } from "@reach/router";

const Form = (props) => {
  const { myForm, error, onChangeHandler, submitHandler } = props;
  return (
    <>
      <form onSubmit={submitHandler} className="container">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={myForm.name}
            onChange={onChangeHandler}
          />{" "}
          {error.name ? (
            <span className="text-danger">{error.name.message}</span>
          ) : (
            ""
          )}{" "}
          <br />
          <label>Type</label>
          <input
            type="text"
            name="type"
            className="form-control"
            value={myForm.type}
            onChange={onChangeHandler}
          />
          {error.type ? (
            <span className="text-danger">{error.type.message}</span>
          ) : (
            ""
          )}{" "}
          <br />
          <label>Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={myForm.description}
            onChange={onChangeHandler}
          />
          {error.description ? (
            <span className="text-danger">{error.description.message}</span>
          ) : (
            ""
          )}{" "}
          <br />
          <label>Skill 1:(opt)</label>
          <input
            type="text"
            name="skillOne"
            className="form-control"
            value={myForm.skillOne}
            onChange={onChangeHandler}
          />
          <label>Skill 2:(opt)</label>
          <input
            type="text"
            name="skillTwo"
            className="form-control"
            value={myForm.skillTwo}
            onChange={onChangeHandler}
          />
          <label>Skill 3:(opt)</label>
          <input
            type="text"
            name="skillThree"
            className="form-control"
            value={myForm.skillThree}
            onChange={onChangeHandler}
          />
        </div>
        <input type="submit" value="Add Pet" className="btn btn-success" />
      </form>
      <br />
      <Link to="/">back to home</Link>
    </>
  );
};
export default Form;
