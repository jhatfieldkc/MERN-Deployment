import React from "react";
import { Link } from "@reach/router";

const Table = (props) => {
  const { pet } = props;
  return (
    <>
      <div className="card">
        <h3>Name: {pet.name}</h3>
        <h3>Type: {pet.type}</h3>
        <h3>
          <Link to={`/pet/${pet._id}`}>
            <button className="btn btn-secondary">details</button>
          </Link>{" "}
          &nbsp;
          <Link to={`/pet/update/${pet._id}`}>
            <button className="btn btn-info">edit</button>
          </Link>
        </h3>
      </div>
    </>
  );
};
export default Table;
