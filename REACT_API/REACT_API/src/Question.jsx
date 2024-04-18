import { useState } from 'react'
import './App.css'
 
function App() {
  const [formulaire, setFormulaire] = useState({
    nom: "",
    prenom: "",
    age: "",
  })
 
 
  const sendInfo = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/Question", {
      method: "POST",
      headers: { 'Content-type': 'application/json'},
      body: JSON.stringify(formulaire)
    }).then(response => response.json()).then(data => console.log(data));
  };
  return (
    <>
      <form onSubmit={sendInfo}>
        <input type="text" name="nom" value={formulaire.nom}></input>
        <input type="text" name="prenom"  value={formulaire.prenom}></input>
        <input type="text" name="age" value={formulaire.age}></input>
        <input type="submit" value="submit" />
      </form>
    </>
  )
}
 
export default App