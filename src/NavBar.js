import {
    NavLink
  } from "react-router-dom";
function NavBar(){

    const link = {
        width: '100px',
        padding: '12px',
        margin: '0 6px 6px',
        background: 'blue',
        textDecoration: 'none',
        color: 'white',
      }

      
    return (
        <div>
            <h1>Superhero Central</h1>
            <NavLink to="/heroes" style={link} exact activeStyle={{background: 'darkblue'}}>ALL HEROES</NavLink>
            <NavLink to="/heroes/new" style={link} exact activeStyle={{background: 'darkblue'}}>NEW HERO</NavLink>
            <NavLink to="/" style={link} exact activeStyle={{background: 'darkblue'}}>HOME</NavLink>
        </div>
    )
}

export default NavBar