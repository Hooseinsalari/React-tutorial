import React, {useState, useEffect} from 'react';
import axios from "axios";

const Data = () => {
    const[post, setPost] = useState({});
    const[isLoading, setLoading] =useState(true)
    const[error, setError] = useState("")


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError("")
        })
        .catch(err => {
            setLoading(false)
            setPost({})
            setError("An error")
        })

    }, [])

    return (
        <div>
            {isLoading ? "Loading..." : post.body}
            {(error && error)}
        </div>
    );
};

export default Data;