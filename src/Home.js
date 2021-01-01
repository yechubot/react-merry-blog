import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'welcome to my blog', body: 'this is my ...', author: 'yechu', id: 1 },
        { title: 'how to make a snakbar on android?', body: 'this is my ...', author: 'flutter', id: 2 },
        { title: 'welcome people', body: 'this is my ...', author: 'mario', id: 3 }]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;