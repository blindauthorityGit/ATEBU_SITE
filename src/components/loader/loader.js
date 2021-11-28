function Loader(props) {
    return (
        <div className={`loadingWrapper ${props.klasse}`}>
            <div class="gooey">
                <span class="dot"></span>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default Loader;
