import { useState } from 'react';
import {useHistory} from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title,body,author};
    
    setIsPending(true);

    fetch('http://localhost:8000/blogs',{
      method:'POST',
      body:JSON.stringify(blog),
      headers:{'Content-type' :'application/json'}
    })
    .then(()=> {
      console.log('new blog added');
      setIsPending(false);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
      <label >Title: </label>
      <input
        required
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <label >Body: </label>
      <textarea
        required
        rows="8"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <label >Author: </label>
      <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)}>
        <option value="mario">mario</option>
        <option value="yoshi">yoshi</option>
      </select>
      <button>Add a new Blog </button>
      </form>
    </div>
  );
}

export default Create;