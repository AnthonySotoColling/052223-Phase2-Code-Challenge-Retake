import React, {useState} from "react";

function NewPoemForm({onClick}) {

const [newPoem,setNewPoem]= useState({})


function onChange(e){
  setNewPoem({...newPoem, [e.target.name] : e.target.value})
}

function onSubmit(e){
  e.preventDefault()
  onClick(newPoem)
}

  return (
    <form onSubmit={onSubmit} className="new-poem-form">
      <input type="text" name="title" value={newPoem.title} onChange={onChange} placeholder="Title" />
      <input type="text" name="author" value={newPoem.author} onChange={onChange} placeholder="Author" />
      <textarea type="text" name="content" value={newPoem.content} onChange={onChange} placeholder="Write your masterpiece here..." rows={10} />
      <input  onClick={() => onClick(newPoem)} type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
