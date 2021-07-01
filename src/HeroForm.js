import {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'

function HeroForm({updateHeroes, heroes}){
    const defaultFormData = {
        name: "",
        image: "",
        likes: 0
    }
    const [formData, setFormData] = useState(defaultFormData)
    const heroId = useParams().id
    const history = useHistory()


    useEffect(() => {
        if(heroes){
            const heroToEdit = heroes.find(h => h.id === parseInt(heroId))
            if(heroToEdit){
                setFormData(heroToEdit)
            }
        }   
    }, [heroId, heroes])

    function handleSubmit(e){
        e.preventDefault()

        const method = formData.id ? "PATCH" : "POST"
        const url = formData.id ? `http://localhost:3004/superheroes/${formData.id}` :  'http://localhost:3004/superheroes' 

        const configObj = {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        fetch(url, configObj)
        .then(r => r.json())
        .then(data => {
            updateHeroes(data)
            setFormData(defaultFormData)
            history.push('/heroes')
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