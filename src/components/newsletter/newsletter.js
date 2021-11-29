import React, { useState, useEffect } from "react";
import Mailchimp from "react-mailchimp-form";

function Newsletter(props) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 200);
    }, []);

    return (
        <div className={`newsletterWrapperNu ${loaded && "animate__animated animate__fadeIn"}`}>
            {loaded && (
                <>
                    <h4 className="font-medium mb-5">Newsletter abonnieren</h4>
                    <Mailchimp
                        action="https://atelierbuchner.us13.list-manage.com/subscribe/post?u=e1da955c2bace72ddac6239b9&amp;id=87cffb3463"
                        fields={[
                            {
                                name: "EMAIL",
                                placeholder: "Email",
                                type: "email",
                                required: true,
                            },
                        ]}
                        messages={{
                            sending: "Sie werden eingetragen...",
                            success: "Vielen Dank für Ihren Eintrag!",
                            error: "Es gab einen Fehler. Bitte versuchen Sie es nocheinmal oder kontaktieren Sie uns über Email.",
                            empty: "Feld leer.",
                            duplicate: "Sie sind bereits eingetragen.",
                            button: "Abonnieren",
                        }}
                        styles={{
                            sendingMsg: {
                                color: "#B2AC97",
                            },
                            successMsg: {
                                color: "#B2AC97",
                            },
                            duplicateMsg: {
                                color: "#B27575",
                            },
                            errorMsg: {
                                color: "#B27575",
                            },
                        }}
                        className="mailchimp"
                    ></Mailchimp>
                </>
            )}
        </div>
    );
}

export default Newsletter;

// <!-- Begin Mailchimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
// 	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
// <form action="https://atelierbuchner.us13.list-manage.com/subscribe/post?u=e1da955c2bace72ddac6239b9&amp;id=87cffb3463" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// 	<h2>Subscribe</h2>
// <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
// </div>
// 	<div id="mce-responses" class="clear">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e1da955c2bace72ddac6239b9_87cffb3463" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>
// <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
// <!--End mc_embed_signup--></link>
