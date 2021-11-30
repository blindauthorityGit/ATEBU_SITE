function Modal(props) {
    return (
        <div
            className={`modalWrapper fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-3/4 w-4/5
            grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4  bg-white  ${props.wrapperClass}`}
        >
            {props.children}
        </div>
    );
}

export default Modal;
