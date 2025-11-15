import React, { useState } from "react";

function ToyForm({ addToy }) {

  const [toyInfo, setInfo] = useState({
    name: "",
    image: "",
  })

  

  function handleSubmit(e) {
    e.preventDefault()
    const newToy = {
      ...toyInfo,
    }
  

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newToy),
    })
      .then(response => {
        if (!response.ok) {throw new Error("Failed to add toy")}
        return response.json()
      })
      .then(newToy => {
        addToy(newToy)
        setInfo({
          name: "",
          image: "",
        })
      })
      .catch(e => console.log(e.message))
    }

    function handleChange(e) {
      setInfo(currentData => ({
        ...currentData, [e.target.name]: e.target.value
      }))
    }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
          value={toyInfo.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
          value={toyInfo.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
