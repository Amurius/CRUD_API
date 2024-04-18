import { useState } from 'react'
import './App.css'

function App() {
  const [formulaire, setFormulaire] = useState({
    nom: "",
    prenom: "",
    age: null,
  })

  const setValue = (e) => {
    const { name, value } = e.target;
    setFormulaire(conteneur => ({
      ...conteneur,
      [name]: value,
    }));
  }

  const sendInfo = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/Ajout", {
      method: "POST",
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(formulaire)
    }).then(response => response.json()).then(data => console.log(data));
    alert("Ajout réussi ! ")
  };
  return (
    <>
      <form onSubmit={sendInfo}>
        <input type="text" name="nom" onChange={setValue} placeholder='Nom'></input>
        <input type="text" name="prenom" onChange={setValue} placeholder='Prénom'></input>
        <input type="number" name="age" onChange={setValue} placeholder='Age'></input>
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default App
