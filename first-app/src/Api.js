import React from 'react';
import useAxios from "use-axios";

const Api = () => {
    const {data} = useAxios("https://api.freerealapi.com/blogs/61855769a678f4693601cb40")
    return (
        <div>
            <h3>{data.blog.title}</h3>
        </div>
    );
};

export default Api;