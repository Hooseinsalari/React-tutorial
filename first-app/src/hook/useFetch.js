import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
    const [data, setData] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    axios.get(url)
      .then((response) => {
        setLoading(false)
        setData(response.data)
      })
      .catch((error) => {
        setLoading(false)
        setData(null)
        setError(error.message)
      })
  }, [])
  
  return {data, error,loading}

};

export default useFetch;