import React, { useState, useEffect } from "react";

import axios from "axios";
import "../style/tourDetails.css";
import { Link, useParams } from "react-router-dom";

function TourDetails() {
  const { id } = useParams();
  const [tourDetail, settourDetail] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const tourDetail = await axios.get(`/api/tours/${id}`, {
          signal: controller.signal,
        });
        console.log(tourDetail.data);
        settourDetail(tourDetail.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          // console.log("Request canceld", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();
    return () => {
      controller.abort();
    };
  }, []);
  const deleteuser = (id)=>{
    alert("deleted")
  }

  return (
    <div className="main">
      {loading && <h1>Loading....</h1>}
      {error && <h1>Something went wrong</h1>}

      <div className="detaillMain">
        <div  className="tourMain">
          <h1 className="title">{tourDetail.title}</h1>
          <img className="img" src={tourDetail.image} alt="" />
          <p className="description ">{tourDetail.description}</p>
          <div className="place">
            <h5 className="">{tourDetail.location} ,</h5>

            <h5 className="">{tourDetail.country} :-</h5>
        <Link to={tourDetail.map}>Map Location</Link>
          </div>
         <div className="button">
         <Link to="/details/:id/edit">
            <button className="edit">Edit</button>
          </Link>
          <Link>
          <button className="delete" onClick={()=>deleteuser(id)}>Delete</button></Link>
         </div>
         <hr />

        </div>
        
      </div>
    </div>
  );
}

export default TourDetails;
