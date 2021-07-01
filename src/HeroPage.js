import { useEffect, useState } from "react"
import HeroCard from "./HeroCard"
import HeroForm from "./HeroForm"
import {
    Switch,
    Route
  } from "react-router-dom";

  // any route that starts with '/heros/' will come here
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

    const updateHero = (updatedHero) => {
        // setHeroes(heros => {
        //     // const index = heros.findIndex(h => h.id === updatedHero.id)
        //     // const arrayBeforeTheChange = heros.slice(0, index) // [h1, h2]
        //     // const arrayAfterTheChange = heros.slice(index + 1) // [h4, h5, h6]
        //     // return [...arrayBeforeTheChange, updatedHero, ...arrayAfterTheChange]

        //     return heros.map(hero => {
        //         if(updatedHero.id === hero.id){
        //             return updatedHero
        //         } else {
        //             return hero
        //         }
        //     })
        // })

        const newHeros = heroes.map(hero => {
            if(updatedHero.id === hero.id){
                return updatedHero
            } else {
                return hero
            }
        })

        setHeroes(newHeros)
    }

    return (
        <div>
            <Switch>
                <Route exact path="/heroes/new">
                    <HeroForm addNewHero={addNewHero} />
                </Route>

                <Route exact path="/heroes/:id/edit">
                    <HeroForm heroes={heroes} />
                </Route>

                <Route path="/heroes">
                    {heroes.map(h => <HeroCard hero={h} key={h.id} updateHero={updateHero}/>)}
                </Route>
            </Switch>
        </div>
    )
}

export default HeroPage