import React, { useState, useEffect } from "react";

import axios from "axios";
// import "../style/tours.css";
import { Link,useParams } from "react-router-dom";

function TourDetails() {
  const { id } = useParams();
  const [tourDetail, settourDetail] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const tourDetail = await axios.get(`/api/tours/${id}`,
          { signal: controller.signal }
        );
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

  return (
    <div className="">
      <h1>Tour Detail: {tourDetail.length} </h1>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Something went wrong</h1>}

      <div className="">
       
          <div key={tourDetail._id} className="tourMain">

            <Link  className="nav-link" to={`/details`}>
            <div className="">
              <h1 className="">{tourDetail.title}</h1>
              <p>{tourDetail.description}</p>
              <img className="img" src={tourDetail.image} alt="" />
              <div className="">
                <h5 className="">{tourDetail.location} ,</h5>

                <h5 className="">{tourDetail.country}</h5>
              </div>
            </div></Link>
          </div>
          <Link to={tourDetail.map} >Map Location</Link>
      </div>
    </div>
  );
}

export default TourDetails