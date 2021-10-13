import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    post: {},
    error:"",
    isLoading: true
}

const reducer = (state, action) => {
    switch(action.type){
        case "SUCCESS":
            return{
                isLoading: false,
                post: action.payload,
                error: ""
            }
        case "FAILED":
            return{
                isLoading: false,
                post:{},
                error: "An Error ...!"
            }
        default:
            return state
    }
}

const GetData = () => {

    const [data, dispatch] =  useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
            dispatch({type: "SUCCESS", payload: response.data})
            // setLoading(false)
            // setPost(response.data)
            // setError("")
        })
        .catch(err => {
            dispatch({type:"FAILED"})
            // setLoading(false)
            // setPost({})
            // setError("An error")
        })

    }, [])

    return (
        <div>
            {data.isLoading ? "Loading..." : data.post.body}
            {data.error && data.error}
        </div>
    );
};

export default GetData;