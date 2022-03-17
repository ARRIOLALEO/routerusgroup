import {useLocation} from 'react-router-dom'
function Index(){
    console.log(useLocation().state)
    return(
        <h1>This is the Main Page </h1>
        )
}

export default Index