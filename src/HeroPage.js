import { useEffect, useState } from "react"
import HeroCard from "./HeroCard"
import HeroForm from "./HeroForm"

function HeroPage(){
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/superheroes')
        .then(r => r.json())
        .then(data => setHeroes(data))
    }, [])

    const addNewHero = (hero) => {
        setHeroes((heros) => [...heros, hero])
    }

    return (
        <div>
            <HeroForm addNewHero={addNewHero} />
           {heroes.map(h => <HeroCard hero={h} key={h.id}/>)}
        </div>
    )
}

export default HeroPage