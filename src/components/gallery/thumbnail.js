function Thumbnail(props) {
    return (
        <div className={`thumbnailWrapper`}>
            <div className={`thumbnail`}>
                <img src={props.url} alt="" />
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
