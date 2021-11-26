import { Link } from "react-router-dom";

function Icon(props) {
    return (
        <i
            width={props.width}
            height={props.height}
            className={`bi bi-${props.icon} ${props.margin} ${props.color}`}
        ></i>
    );
}

export default Icon;
