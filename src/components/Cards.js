import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDownLeftRight,
  faBath,
  faBed,
  faBuilding,
  faGasPump,
  faGauge,
  faGear,
  faStairs,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import{faHeart} from "@fortawesome/free-regular-svg-icons"

const Cards = ({product}) => {
  return (
    <div className="Card">
    <div className="Card-Images">
      <img src={product.image} alt={product.title}/>
    </div>
    <div className="Card-Body">
      <div className="Cars-name">
        <h3>{product.title}</h3>
        <h4>{product.model}</h4>
      </div>
      <div className="Cars-feature">
        <div>
          <h6>
            <FontAwesomeIcon icon={faUserGroup} /> <span> 4 People</span>
          </h6>
          <h6>
            <FontAwesomeIcon icon={faGasPump} />
           <span> Hybrid </span>
          </h6>
        </div>

        <div>
          <h6>
            <FontAwesomeIcon icon={faGauge} />
           <span> 6.3km/1- liter</span> 
          </h6>
          <h6>
            <FontAwesomeIcon icon={faGear} />
            <span> Automatic</span>
           
          </h6>
        </div>
      </div>
      <div className="Cars-details">
        <div>
          <h4>
            <span>&#8377;{product.price}</span>/month
          </h4>
        </div>
        <div className='Cars-btns'>
        <h5>
        <FontAwesomeIcon icon={faHeart} />
        </h5>
          <button>Rent now</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards