import React, { useState } from 'react'
import {Form} from "reactstrap"
import axios from 'axios';
import "../style/edit.css"



function Edit() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [country, setCountry] = useState("")
    const [map, setMap] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.put("/api/tours/edit", {
            title,
            description,
            image,
            location,
            country,
            map,
          });
          console.log('Data saved:',response.data);
          // Optionally: Redirect the user to a different page after successful submission
        } catch (error) {
          console.error('Error saving data:', error);
        }
      };
    

  return (
    <>
        <div className='main'>
            <Form action="/details/:id/edit"  onSubmit={handleSubmit} method="PUT">
            <div>
                <label htmlFor="title" className="form-lable">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  
                />
             </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-lable">Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="enter description"
                  className="form-control"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-lable">Image</label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="enter image"
                  className="form-control"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-lable">Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="enter location"
                  className="form-control"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div> <div className="mb-3">
                <label htmlFor="Country" className="form-lable">Country</label>
                <input
                  type="text"
                  name="Country"
                  id="Country"
                  placeholder="enter Country"
                  className="form-control"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div> <div className="mb-3">
                <label htmlFor="map" className="form-lable">Map</label>
                <input
                  type="text"
                  name="map"
                  id="map"
                  placeholder="enter map link"
                  className="form-control"
                  required
                  value={map}
                  onChange={(e) => setMap(e.target.value)}
                />
              </div>
              <button type='submit' className="edit">Edit</button>
            </Form>
        </div>
    </>
  )
}

export default Edit