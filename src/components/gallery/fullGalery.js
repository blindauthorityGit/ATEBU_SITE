import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

import Thumbnail from "./thumbnail";

const Galerie = (props) => {
    const [postData, setPostData] = useState(null);

    const builder = imageUrlBuilder(sanityClient);
    function urlFor(source) {
        return builder.image(source);
    }

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == 'Bild']`)
            .then((data) => {
                setPostData(data);
                console.log(data);
            })
            .catch(console.error);
    }, []);

    return (
        <div className={`galerie`}>
            {postData &&
                postData.map((e, i) => {
                    return <Thumbnail url={urlFor(e.image)}></Thumbnail>;
                })}
        </div>
    );
};

export default Galerie;
