import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Card = ()=>{
    return(
<div className='container'>
    <div className='card'>
  
    <FontAwesomeIcon icon={faBuilding} />


    <FontAwesomeIcon icon="fa-sharp fa-solid fa-building" size="lg" />
        <div className='infos'>
            <h2>About the Company</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu tuglat nulla parlatur.</p>
        </div>

    </div>


</div>
    )

}

export default Card;