function Overlay(props) {
    return <div className={`w-full fade-in h-full fixed overlay ${props.class}`} onClick={props.onClick}></div>;
}

export default Overlay;
