import { useState, useEffect } from "react";
import BlogList from "./BlogLists";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'welcome to my blog', body: 'this is my ...', author: 'yechu', id: 1 },
        { title: 'how to make a snakbar on android?', body: 'this is my ...', author: 'flutter', id: 2 },
        { title: 'welcome people', body: 'this is my ...', author: 'mario', id: 3 }]);

        const [name,setName] = useState('mario');
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !==id); // match -> delete
        setBlogs(newBlogs);
    }

    useEffect(()=> {
        console.log('use effect ran');
        console.log(name);
    },name);//name 변할때만 호출됨 
    return (
        <div className="home">
         <BlogList title="All Blogs " blogs ={blogs} handleDelete={handleDelete}/>
         <BlogList title="Mario Blogs" blogs ={blogs.filter((blog)=> blog.author==='mario')}
         handleDelete={handleDelete}/>
         <button onClick={()=> setName('yechu')}>change name</button>
         <p>{name}</p>
            <div className="go-github">
                <button href="/">Go to yeeun's github </button>
            </div>
        </div>
    )
}

export default Home;