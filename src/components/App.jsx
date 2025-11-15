import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [toyList, changeToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then (response => {
      if (!response.ok) {throw new Error("Failed to retrieve the toys")}
      return response.json()
    })
    .then(changeToys)
    .catch(e => console.log(e.message))
  }, [])


  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    changeToys(currentToys => [...currentToys, newToy])
  }

  function updateToy(updatedToy) {
    changeToys(currentToys => currentToys.map(toy => toy.id === updatedToy.id ? updatedToy : toy))
  }

  function deleteToy(deleteToyId) {
    changeToys(currentToys => currentToys.filter(toy => toy.id !== deleteToyId))
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer data={toyList} updateToy={updateToy} deleteToy={deleteToy}/>
    </>
  );
}

export default App;
