import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function HeroForm({addNewHero, heroes}){
    const defaultFormData = {
        name: "",
        image: "",
        likes: 0
    }
    const [formData, setFormData] = useState(defaultFormData)

    const params = useParams()
    console.log(params)

    

    useEffect(() => {
        if(params.id && heroes.length > 0){
            //find the hero
            const heroWeWantToEdit = heroes.find(hero => hero.id === parseInt(params.id))
            console.log(heroWeWantToEdit)
            setFormData(heroWeWantToEdit)
        }else {
            setFormData(defaultFormData)
        }
    }, [params, heroes])

    function handleSubmit(e){
        e.preventDefault()

        const newHero = {...formData, likes: 0}

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHero)
        }
        fetch('http://localhost:3004/superheroes', configObj)
        .then(r => r.json())
        .then(data => {
            addNewHero(data)
            setFormData(defaultFormData)
        })
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2>Add a New Superhero</h2>
           <form onSubmit={handleSubmit}>
               <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
               </div>
               <div>
                <label>Image:</label>
                <input type="text" name="image" value={formData.image} onChange={handleChange} />
               </div>
                <input type="submit" value={formData.id ? "Update" : "Create"}/>
           </form>
        </div>
    )
}

export default HeroForm