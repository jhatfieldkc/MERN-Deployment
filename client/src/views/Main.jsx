import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import axios from "axios";
import { Link } from "@reach/router";

const Main = (props) => {
  const [allPets, setAllPets] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet")
      .then((res) => setAllPets(res.data))
      .catch((err) => console.log("Error", err));
  }, []);
  return (
    <>
      <h1>Main page</h1>
      {allPets ? allPets.map((item, i) => <Table key={i} pet={item} />) : ""}
      <Link to="/pet/create">
        <button className="btn btn-success">Add new pet</button>
      </Link>
    </>
  );
};
export default Main;
