import { useState, useEffect } from 'react';
import BlogList from './BlogLists';
import useFetch from './useFetch';
const Home = () => {
    
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div> Error </div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList title="All Blogs " blogs={blogs} />}
        </div>
    )
}

export default Home;