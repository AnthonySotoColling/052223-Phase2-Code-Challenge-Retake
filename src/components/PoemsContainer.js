import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  return (
    <div className="poems-container">
      {poems === null ? null : poems.map((poem) => <Poem poem={poem}/>)}
    </div>
  );
}

export default PoemsContainer;
