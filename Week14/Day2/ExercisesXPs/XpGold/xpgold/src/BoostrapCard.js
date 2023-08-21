import ListGroup from "./ListGroup";

const BoostrapCard = (props)=>{
    
    let {bob,mcCartney} =props;
    return(
        <>
        <div className="card m-5" style={{width: '30rem'}}>
  <img className="card-img-top" src={bob.imageUrl} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{bob.title}</h5>
    <p className="card-text">{bob.description}</p>
    <a href={bob.buttonUrl} class="btn btn-primary">{bob.buttonLabel}</a>
  </div>
</div>
<div className="card m-5" style={{width: '30rem'}}>
  <img className="card-img-top" src={mcCartney.imageUrl} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{mcCartney.title}</h5>
    <p className="card-text">{mcCartney.description}</p>
    <a href={mcCartney.buttonUrl} class="btn btn-primary">{mcCartney.buttonLabel}</a>
  </div>
</div>
        </>
    )

}


export default BoostrapCard;