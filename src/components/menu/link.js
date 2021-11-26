import { Link } from "react-router-dom";

function MenuLink(props) {
    return (
        <Link className={`menuItemWrapper w-1/2 mb-5 ${props.class}`} to={props.url}>
            <div className={`menuItem text-center text-sm text-text font-regular tracking-wide uppercase`}>
                {props.title}
            </div>
        </Link>
    );
}

export default MenuLink;
