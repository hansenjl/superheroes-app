import {Link} from 'react-router-dom'

function HeroCard({hero, updateHero}){
    const {id, image, name, likes} = hero
   

    function upVote(e){
        // add code here to do a patch request
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"likes": likes + 1 })
        }
        fetch(`http://localhost:3004/superheroes/${id}`, configObj)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            updateHero(data)
        })
        // change state 
        // change db 
    }

    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{likes} likes</p><span onClick={upVote}>👍</span>
            <div>
                <Link to={`/heroes/${id}/edit`}><button>Edit</button></Link>
            </div>

        </div>
    )
}

export default HeroCard