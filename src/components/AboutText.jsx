import React from 'react';
import Collapse from "../components/Collapse"
import AboutData from "../datas/AboutData.json"

const AboutText = () => {
    return (
        <>
        {AboutData.map((rule, id) => (
            <Collapse
                key={id}
                aboutTitle={rule.aboutTitle}
                aboutText={rule.aboutText}
                aboutStyle="about-style"
            />
        ))}

        </>
    );
};

export default AboutText;