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
    }, [])

    return (
        <>
            <div id="cont">
                <div>
                <h3>Numéro de la personne</h3>
                    {dataAff && dataAff.map((data, index) => <p className={index}>Personne {index}</p>)}
                </div>
                <div>
                <h3>Noms</h3>
                    {dataAff && dataAff.map((data, index) => <p className={index}>{data.nom}</p>)}
                </div>
                <div>
                <h3>Prénoms</h3>
                    {dataAff && dataAff.map((data, index) => <p className={index}>{data.prenom}</p>)}
                </div>
                <div>
                <h3>Ages</h3>
                    {dataAff && dataAff.map((data, index) => <p className={index}>{data.age}</p>)}
                </div>
            </div>
        </>
    )
}