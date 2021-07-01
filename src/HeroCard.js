import {Link} from 'react-router-dom'
function HeroCard({hero}){
    const {id, image, name, likes} = hero

    function upVote(e){
        // add code here to do a patch request
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