import React, { useRef } from 'react'
import {Form,FormGroup} from "reactstrap"
import "../shared/searchBar.css"

function SearchBar() {

const locationRef=useRef('')
const distanceRef=useRef(0)
const maxpeopleRef=useRef(0)


const searchHandler = ()=>{
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const maxpeople = maxpeopleRef.current.value
    if(location==""||distance==""||maxpeople==""){
        return alert("All fields are required!")
    }

}


  return (

<div id='search'>
    <Form className='search-form'>
        <FormGroup className='search-formgroup'>
            <span>
            <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp; <h6>Location</h6>
            </span>
          
               
                <input type="text" placeholder='where are you going?' ref={locationRef}/>
     
        </FormGroup>
        <FormGroup>
            <span>
            <i className="fa-solid fa-people-arrows"></i>&nbsp;&nbsp;
             <h6>Distance</h6>
            </span>
         
                
                <input type="text" placeholder='Distance km' ref={distanceRef} />
   
        </FormGroup>
        <FormGroup>
            <span>
         
            <i className="fa-solid fa-people-group"></i>&nbsp;&nbsp;<h6>Max People</h6>
            </span>
       
                <input type="number" placeholder='1' ref={maxpeopleRef}/>
          
        </FormGroup>
        <span className='search-icon' onClick={searchHandler} type="
        submit" >
<i className="fa-solid fa-magnifying-glass-location"></i>
        </span>
    </Form>
</div>

  )
}

export default SearchBar