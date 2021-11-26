import { Link } from "react-router-dom";

function Icon(props) {
    return <i className={`bi bi-${props.icon} text-text ${props.margin}`}></i>;
}

export default Icon;
