import { useEffect } from "react"
import { useState } from "react"
import './index.css'

export default function List() {

    const [dataAff, setDataAff] = useState()

    useEffect(() => {

        fetch("http://localhost:3000")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setDataAff(data)
            });
    }
        , [])

    return (
        <>
            <div id="cont">
                <div>
                    {dataAff && dataAff.map((data, index) => <p id={index}>Personne {index}</p>)}
                </div>
                <div>
                    {dataAff && dataAff.map((data, index) => <p>{data.nom}</p>)}
                </div>
                <div>
                    {dataAff && dataAff.map((data, index) => <p>{data.prenom}</p>)}
                </div>
                <div>
                    {dataAff && dataAff.map((data, index) => <p>{data.age}</p>)}
                </div>
            </div>
        </>
    )
}