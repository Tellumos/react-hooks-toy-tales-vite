import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ data, updateToy, deleteToy }) {
  return (
    <div id="toy-collection">
      {data.map((toy) => (
        <ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} updateToy={updateToy} deleteToy={deleteToy} />
      ))}
    </div>
  );
}

export default ToyContainer;
