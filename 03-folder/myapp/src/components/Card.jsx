import React from 'react'

const Card = (props) => {
  return (
    // <div className="card">
    //   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGKUd4gQgPUgtnFNRSCpaUalkWKttu7kF-mlF5FO_6g&s=10" alt="img" />  
    //   <h1>Jeswanth, 20</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur quibusdam exercitationem?</p>
    //   <button>View Profile</button>
    // </div>
    <div className="card">
      <img src={props.img}></img>  
      <h1>{props.user} {props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequatur quibusdam exercitationem?</p>
      <button>View Profile</button>
    </div>
          
  )
}

export default Card
