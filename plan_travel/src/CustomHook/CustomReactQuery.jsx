import React, { useEffect, useState } from 'react'
import axios from 'axios'


function CustomReactQuery(urlPath) {
    const [tourData, settourData] = useState([])
  const [error,setError]= useState(false)
  const [loading,setLoading]=useState(false)


  useEffect(() => {
    const controller = new AbortController()
    ;(async()=>{
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(urlPath,{signal:controller.signal})
        console.log(response.data);
        settourData(response.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)){
            console.log('Request canceld',error.message)
            return
        }
        setError(true)
        setLoading(false)

      }
    })()
    return()=>{
        controller.abort()
      }
  }, [])
  return (
    [
        tourData,error,loading
    ]
  )
}

export default CustomReactQuery