import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";

const One = (props) => {
  const [onePet, setOnePet] = useState(null);
  const deletePet = () => {
    axios
      .delete(`http://localhost:8000/api/pet/delete/${onePet._id}`)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pet/${props._id}`)
      .then((res) => setOnePet(res.data))
      .catch((err) => console.log(err));
  }, [props]);
  return (
    <>
      {onePet ? (
        <>
          <h1>Details about: {onePet.name}</h1>
          <div className="container text-left">
            <div>
              <h4>Pet type: {onePet.type}</h4>
              <h4>Description: {onePet.description}</h4>
              <h4>Skills:</h4>
              <ul>
                <li>{onePet.skillOne}</li>
                <li>{onePet.skillTwo}</li>
                <li>{onePet.skillThree}</li>
              </ul>
            </div>
          </div>
          <button className="btn btn-danger" onClick={() => deletePet()}>
            Adopt {onePet.name}
          </button>{" "}
          <br /> <br />
          <Link to="/">back to home</Link>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default One;
