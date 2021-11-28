function Thumbnail(props) {
    return (
        <div
            // onClick={(e) => console.log(e.target)}
            className={`thumbnailWrapper  ${props.klasse}`}
            onClick={props.onClick}
        >
            <div className={`thumbnail`}>
                <img className={props.animation} src={props.url} data-index={props.index} alt="" />
            </div>
            <div className="textWrapper">
                <h3>{props.title}</h3>
                <h4>{props.year}</h4>
            </div>
            <p>{props.description}</p>
        </div>
    );
}

export default Thumbnail;
