import {Link} from 'react-router-dom'
function Header(){

    return(
        <ol>
            <li><Link to={{pathname:"/",
        state:{
            category:"another category",
            product:"another product"
        }}}>Home</Link></li>

            <li><Link to="/About/children/socks">About</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
        </ol>
    )
}

export default Header