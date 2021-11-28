import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { Suspense, lazy } from "react";

// import Thumbnail from "./thumbnail";

import Loader from "../loader/loader";
const Thumbnail = lazy(() => import("./thumbnail.js"));

const Galerie = (props) => {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [size, setSize] = useState(null);

    const refRef = useRef(null);

    const builder = imageUrlBuilder(sanityClient);
    function urlFor(source) {
        return builder.image(source);
    }

    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function targetLock(e) {
        console.log(Number(e.target.dataset.index), postData[Number(e.target.dataset.index)]);
    }

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == 'Bild']`)
            .then((data) => {
                setPostData(shuffleArray(data));
                console.log(data);
                setLoading(false);
            })
            .catch(console.error);
        setSize(window.innerWidth);
        console.log(window.innerWidth);
    }, []);

    useLayoutEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // const topPos = refRef.current.getBoundingClientRect().top;

    const onScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight;
        console.log(scrollPos);

        // if (topPos < scrollPos) {
        //     // enter animation code here
        // }
    };

    return (
        <>
            {loading && <Loader></Loader>}
            {!loading && (
                <div className={`galerie grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2`} ref={refRef}>
                    {postData &&
                        postData.map((e, i) =>
                            i === 0 ? (
                                <Suspense
                                    fallback={
                                        <div
                                            className=""
                                            style={{ width: "800px", height: "800px", background: "#f5f5f5" }}
                                        ></div>
                                    }
                                >
                                    <Thumbnail
                                        animation="animate__animated animate__fadeIn"
                                        klasse="col-span-2 row-span-2"
                                        url={urlFor(e.image).width(800).height(800)}
                                        key={"key" + i}
                                        index={i}
                                        onClick={(e) => targetLock(e)}
                                    ></Thumbnail>
                                </Suspense>
                            ) : (
                                <Suspense
                                    fallback={
                                        <div style={{ width: "400px", height: "400px", background: "#f5f5f5" }}></div>
                                    }
                                >
                                    <Thumbnail
                                        animation="animate__animated animate__fadeIn"
                                        url={urlFor(e.image).width(400).height(400)}
                                        key={"key" + i}
                                        index={i}
                                        onClick={(e) => targetLock(e)}
                                    ></Thumbnail>
                                </Suspense>
                            )
                        )}
                </div>
            )}
        </>
    );
};

export default Galerie;
