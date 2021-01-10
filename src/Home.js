import { useState, useEffect } from "react";
import BlogList from "./BlogLists";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
       
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !==id); // match -> delete
        setBlogs(newBlogs);
    }

    useEffect(()=> {
        fetch('http://localhost:8000/blogs')
        .then(res=> {
            return res.json()
        })
        .then((data)=> {
            setBlogs(data);
        })
    },[]);

    return (
        <div className="home">
        {blogs && <BlogList title="All Blogs " blogs ={blogs} handleDelete={handleDelete}/>}
        
            <div className="go-github">
                <button href="/">Go to yeeun's github </button>
            </div>
        </div>
    )
}

export default Home;