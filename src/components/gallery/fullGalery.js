import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { Suspense, lazy } from "react";

// import Thumbnail from "./thumbnail";
import Overlay from "../overlay/overlay";
import Modal from "../modal/modal";

import Loader from "../loader/loader";
const Thumbnail = lazy(() => import("./thumbnail.js"));

const Galerie = (props) => {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [size, setSize] = useState(null);
    const [overlay, setOverlay] = useState(false);
    const [imgID, setImgID] = useState(null);

    const refRef = useRef(null);
    const refThumbnail = useRef(null);

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
        setOverlay(true);
        setImgID(Number(e.target.dataset.index));
        console.log(urlFor(postData[Number(e.target.dataset.index)].image));
    }
    function hideOverlay() {
        setOverlay(false);
    }

    function fadeIn(e) {
        setTimeout(() => {
            e.target.classList.remove("thumbnailImg");
            e.target.classList.add("fade-in");
        }, Math.random() * 200);
    }

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == 'Bild']`)
            .then((data) => {
                setPostData(shuffleArray(data));
                setLoading(false);
            })
            .catch(console.error);
        setSize(window.innerWidth);
    }, []);

    useLayoutEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight;
        console.log(scrollPos);
    };

    return (
        <>
            {loading && <Loader></Loader>}
            {overlay && (
                <>
                    <Modal>
                        <div className="imgWrapper col-span-2">
                            <img src={urlFor(postData[imgID].image)} alt="" />
                        </div>
                    </Modal>
                    <Overlay onClick={hideOverlay}></Overlay>
                </>
            )}
            {!loading && (
                <div
                    onLoad={(e) => fadeIn(e)}
                    className={`galerie grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 ml-8 mr-8 mt-8`}
                    ref={refRef}
                >
                    {postData &&
                        postData.map((e, i) =>
                            i === 0 ? (
                                <Suspense fallback={<div></div>}>
                                    <Thumbnail
                                        // animation="animate__animated animate__fadeIn"
                                        klasse="md:col-span-2 md:row-span-2"
                                        klasseImg="thumbnailImg"
                                        url={urlFor(e.image).width(400).height(500)}
                                        key={"key" + i}
                                        index={i}
                                        onClick={(e) => targetLock(e)}
                                        ref={refThumbnail}
                                        title={e.titel_Bild}
                                        description={e.technik}
                                    ></Thumbnail>
                                </Suspense>
                            ) : (
                                <Suspense fallback={<div></div>}>
                                    <Thumbnail
                                        // animation="animate__animated animate__fadeIn"
                                        klasse="md:col-span-2 md:row-span-2"
                                        klasseImg="thumbnailImg"
                                        url={urlFor(e.image).width(400).height(500)}
                                        key={"key" + i}
                                        index={i}
                                        onClick={(e) => targetLock(e)}
                                        ref={refThumbnail}
                                        title={e.titel_Bild}
                                        description={e.technik}
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
