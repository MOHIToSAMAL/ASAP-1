import React from 'react'
import { useState } from 'react'

import './Addform.css'

function Addform() {

    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [description, setDescription] = useState("");
    const [coverImage, setCoverImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name,content,description,coverImage});
    }

    
  return (
    <div className="form-container">
        <form className="add-form" action="" onSubmit={handleSubmit} > 

        <label htmlFor="title">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value) } />
            
            <label htmlFor="author">Author</label>
            <input type="text" value={content} onChange={(e)=> setContent(e.target.author) } />

            <label htmlFor="description">Description</label>
            <input type="textarea"  value={description} onChange={(e) => setDescription(e.target.description) } />

            <label htmlFor="coverImage">CoverImage</label>
            <input type="file" value={coverImage} onChange={(e) => setCoverImage(e.target.coverImage) } />

            <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default Addform