function Thumbnail(props) {
    return (
        <div
            // onClick={(e) => console.log(e.target)}
            className={`thumbnailWrapper  ${props.klasse}`}
            onClick={props.onClick}
        >
            <div className={`thumbnail`}>
                <img className={props.klasseImg} src={props.url} data-index={props.index} alt="" />
            </div>
            <div className="textWrapper">
                <h3 className="mt-5 font-bold uppercase text-text">{props.title}</h3>
                <h4>{props.year}</h4>
            </div>
            <p className="text-brighttext mt-3 text-xs">{props.description}</p>
        </div>
    );
}

export default Thumbnail;
