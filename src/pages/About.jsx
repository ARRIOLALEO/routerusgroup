import {useParams} from 'react-router-dom'
function About(){
    const {category,product} = useParams()
    return(
        <h1>This is category {category} product : { product}</h1>
    )
}

export default About