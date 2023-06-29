import React,{useEffect,useState} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
const poemsAPI="http://localhost:8004/poems"


function App() {
  const [poems,setPoems]=useState(null)
  const [show,setShow]=useState(true)
  useEffect(() => {
    fetch(poemsAPI)
      .then(r => r.json())
      .then(data => setPoems(data))
  },[])

  
  
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={() => setShow(!show)}>Show/hide new poem form</button>
        {show ? <NewPoemForm onClick={addNewPoem} /> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );

  function addNewPoem(poem){
    fetch(poemsAPI, {
      method: "POST",
      headers:{
        Accepts: "aplication/json",
        "Content-type" : "application/json",
      },
      body: JSON.stringify(poem),

    })
    .then(res => res.json())
    .then(json => setPoems({...poems, json}))
  }
}

export default App;
