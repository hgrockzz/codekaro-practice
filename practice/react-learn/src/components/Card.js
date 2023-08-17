function Card(props){
    return(
        <div className="card">
            <img src={props.img} className="card-img"></img>
            <h1>{props.title}</h1>
            <p>{props.des}</p>
        </div>
    );
}

export default Card;