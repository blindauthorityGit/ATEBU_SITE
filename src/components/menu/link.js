import { Link } from "react-router-dom";

function MenuLink(props) {
    return (
        <Link className={`menuItemWrapper w-3/4 mb-5 ${props.class}`} to={props.url}>
            <div
                onLoad={props.onLoad}
                className={`menuItem text-center md:text-sm xl:text-xl text-text font-regular tracking-wide uppercase ${setTimeout(
                    () => {
                        return "animate__animated";
                    },
                    Math.random * 200
                )}`}
            >
                {props.title}
            </div>
        </Link>
    );
}

export default MenuLink;
