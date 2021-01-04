import { useState } from "react";
import BlogList from "./BlogLists";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'welcome to my blog', body: 'this is my ...', author: 'yechu', id: 1 },
        { title: 'how to make a snakbar on android?', body: 'this is my ...', author: 'flutter', id: 2 },
        { title: 'welcome people', body: 'this is my ...', author: 'mario', id: 3 }]);

    return (
        <div className="home">
         <BlogList title="All Blogs " blogs ={blogs}/>
         <BlogList title="Mario Blogs" blogs ={blogs.filter((blog)=> blog.author==='mario')}/>
            <div className="go-github">
                <button href="/">Go to yeeun's github </button>
            </div>
        </div>
    )
}

export default Home;