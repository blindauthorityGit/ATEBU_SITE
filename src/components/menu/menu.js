import React, { useState, useEffect } from "react";
import sanityClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";

import MenuLink from "./link";
import Icon from "../icons/icon";
import Newsletter from "./newsletter";

import Logo from "../../assets/logo.svg";

const Menu = (props) => {
    const [postData, setPostData] = useState(null);
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

    useEffect(() => {
        console.log(size);
    }, [size]);

    return (
        <div className={`flex flex-col min-h-full pt-10  items-center ${props.klasse}`}>
            <div className="logoWrapper mb-10 w-24 h-24">
                <img className=" w-24 h-24 animate__animated animate__fadeIn" src={Logo}></img>

                {/* <img className=" w-24 h-24 animate__animated animate__fadeIn" src={urlFor(postData[0].Logo)}></img> */}
            </div>

            <hr className="w-1/2 mb-5" />
            <MenuLink url="galerie" title="Galerie"></MenuLink>
            <MenuLink class="mb-10" url="kurse" title="Kurse"></MenuLink>
            <MenuLink url="about" title="About"></MenuLink>
            <MenuLink url="news" title="News"></MenuLink>
            <MenuLink url="kontakt" title="Kontakt"></MenuLink>
            <hr className="w-1/2 mb-5 mt-5" />
            <div className="iconWrapper mt-5">
                <Icon icon="facebook" margin="mr-8" color="text-text"></Icon>
                <Icon icon="instagram" color="text-text"></Icon>
            </div>
            <div
                className="newsletterContainer absolute flex justify-center w-8/12"
                style={{ top: size.height / 1.75 + "px" }}
            >
                <Newsletter />
            </div>
            <div className="kontaktWrapper flex text-xs absolute bottom-10">
                <div className="left">
                    <hr className="mb-5" />
                    <strong>Atelier Buchner</strong>
                    <br />
                    Prof. Sepp Buchner - Straße 528
                    <br />
                    2823 Pitten
                    <div className="detailWrapper flex mt-3">
                        <Icon icon="telephone-fill" margin="mr-4" color="text-darkerbeige"></Icon>
                        <div className="right">+43 664 94 45 19</div>
                    </div>
                    <div className="detailWrapper flex">
                        <Icon icon="envelope-fill" margin="mr-4" color="text-darkerbeige"></Icon>
                        <div className="right">
                            <a href="mailto:christine@atelierbuchner.at">christine[at]atelierbuchner.at</a>
                        </div>
                    </div>
                    <div className="detailWrapper flex">
                        <Icon icon="whatsapp" margin="mr-4" color="text-darkerbeige"></Icon>
                        <div className="right">
                            <a href="https://wa.me/436509445140">Auf WhatsApp schreiben</a>
                        </div>
                    </div>
                    <p></p>
                </div>
                {/* <div className="right">
                    <strong>Atelier Buchner</strong>
                    <br />
                    Prof. Sepp Buchner - Straße 528
                    <br />
                    2823 Pitten
                </div> */}
            </div>
        </div>
    );
};

export default Menu;
