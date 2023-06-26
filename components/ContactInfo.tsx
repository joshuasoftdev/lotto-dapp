import React from "react";
import { SocialIcon } from 'react-social-icons';

function ContactInfo() {
    return (
        <div className="m-5 mt-0.02 flex flex-row justify-center">
            <div className="flex ml-2 mr-2">
                <SocialIcon url="https://twitter.com/BlockDevJay" />;
            </div>
            <div className="flex ml-2 mr-2">
                <SocialIcon url="https://www.facebook.com/joshua.jkjacobs104/" />;
            </div>
            <div className="flex ml-2 mr-2">
                <SocialIcon url="https://codepen.io/joshuasoftdev" className="bg-white rounded-full" />;
            </div>
            <div className="flex ml-2 mr-2">
                <SocialIcon url="https://www.youtube.com/channel/UCKRZycm8TzwRl8Ko3WfEyaA" />;
            </div>
            <div className="flex ml-2 mr-2">
                <SocialIcon url="https://www.linkedin.com/in/joshua-jacobs-093aa5265/" />;
            </div>
        </div>
    );
}

export default ContactInfo;
