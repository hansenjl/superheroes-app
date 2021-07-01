import { useEffect, useState } from "react"
import HeroCard from "./HeroCard"
import HeroForm from "./HeroForm"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

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

    const updateHero = (hero) => {
        setHeroes((heros) => {
            const index = heros.findIndex(h => h.id === hero.id)
            const beforeHero = heros.slice(0,index)
            const afterHero = heros.slice(index + 1)
            return [...beforeHero, hero, ...afterHero]
        })
    }

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/heroes/new">
                        <HeroForm updateHeroes={addNewHero} />
                    </Route>
                    <Route exact path="/heroes/:id/edit">
                        <HeroForm updateHeroes={updateHero} heroes={heroes} />
                    </Route>
                    <Route path="/heroes">
                        {heroes.map(h => <HeroCard hero={h} key={h.id}/>)}
                    </Route>

                </Switch>
               
            </Router>
           
        </div>
    )
}

export default HeroPage