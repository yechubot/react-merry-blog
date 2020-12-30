import { useState } from "react";

const Home =()=>{
    const [name, setName] = useState('mario');

    const handleClick = (e)=> {
       setName('yechu');
    }

    return(
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click here</button>
            <p>hello, {name}</p>
        </div>
    )
}

export default Home;