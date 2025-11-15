import React from "react";

function ToyCard({ id, name, image, likes, updateToy, deleteToy }) {

  function likeButton() {
    fetch(`http://localhost:3001/toys${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({likes: likes + 1  }),
    })
      .then(response => {
        if (!response.ok) {throw new Error("Failed to like the toy")}
        return response.json()
      })
      .then(updateToy)
      .catch(e => console.log(e.message))
  }

  function deleteButton() {
    fetch(`http://localhost:3001/toys${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok) {throw new Error("Failed to delete the toy")}
        deleteToy(id)
      })
      .catch(e => console.log(e.message))
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={likeButton}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteButton}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
