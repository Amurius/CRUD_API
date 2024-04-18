import { useEffect } from "react"

export default function List() {

    const [dataAff, setDataAff] = useState([])

    useEffect(() => {

        fetch("http://localhost:3000")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setDataAff(data)})
            // let data = {'nom': nom, 'prenom': prenom, 'age': age}
    }
    , [])
    
    return(
    <>
    {dataAff && dataAff.map((data, index) => {
        <div key={index}>
            <h1>{data.nom}</h1>
            <h2>{data.prenom}</h2>
            <h3>{data.age}</h3>
        </div>
    })}
    </>
    )
    }