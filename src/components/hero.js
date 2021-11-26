import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";

const Hero = (props) => {
    const [postData, setPostData] = useState(null);
    const [postDataBild, setPostDataBild] = useState(null);
    const [size, setSize] = useState({
        width: null,
        height: null,
    });

    const builder = imageUrlBuilder(sanityClient);
    function urlFor(source) {
        return builder.image(source);
    }

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == 'settings']`)
            .then((data) => {
                setPostData(data);
                console.log(data);
                console.log(urlFor(data[0].landingImage));
            })
            .catch(console.error);
        sanityClient
            .fetch(`*[_type == 'Bild']`)
            .then((data) => {
                setPostDataBild(data);
                console.log(data);
                console.log("bild");
            })
            .catch(console.error);

        // RESIZE
        function handleResize() {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            console.log("unmounted");
        };
    }, []);

    return (
        <div className={` ${props.klasse}`}>
            {postDataBild && (
                <img
                    className="mainImg"
                    src={urlFor(postDataBild[Math.floor(Math.random() * postDataBild.length)].image)}
                    alt=""
                    style={{ width: size.width + "px", height: size.height + "px" }}
                />
            )}
        </div>
    );
};

export default Hero;
