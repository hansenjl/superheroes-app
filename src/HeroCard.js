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

        </div>
    )
}

export default HeroCard