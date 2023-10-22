

const Card = (props:any) => {
    return (
        <div className="card card-image-cover">
            <img src={props.image} alt="" />
            <div className="card-body">
                <h2 className="card-header">
                    {props.title}
                </h2>
                <div className="card-footer"> 
                    <button className="btn-secondary btn">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Card
