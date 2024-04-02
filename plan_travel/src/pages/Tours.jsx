import React, { useState, useEffect } from "react";

import axios from "axios";
import "../style/tours.css";
import { Link } from "react-router-dom";

function Tours() {
  
  const [tourData, settourData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          "/api/tours/alltours",
          { signal: controller.signal }
        );
        console.log(response.data);
        settourData(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceld", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div className="main">
      {loading && <h1>Loading....</h1>}
      {error && <h1>Something went wrong to fetch the data </h1>}
      <div className="container">
        {tourData.map((data) => (
          <div key={data._id} className="tourMain">


            <Link  className="nav-link" to={`/details/${data._id}`}>
            <div className="toursdata">
              <h1 className="title">{data.title}</h1>
              <img className="img" src={data.image} alt="" />
              <div className="place">
                <h5 className="location">{data.location} ,</h5>

                <h5 className="country">{data.country}</h5>
              </div>
            </div></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;
