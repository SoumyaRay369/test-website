import React, { useState } from 'react';

export const AboutSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMoreClick = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <>
            <div className="text-3xl mt-10 text-center font-playfair">About</div>
            <div className={`font-roboto mt-2 mr-10 ml-10 text-sm md:text-lg ${isExpanded ? '' : 'overflow-hidden max-h-20'}`}>
                <p>I am a very passionate Full Stack Web Developer as well as a Data Analyst. I am currently pursuing my Bachelor's in Electronics and Communication Engineering from National Institute of Technology, Agartala. I have varied interests ranging from Geopolitics to Global Finance Market and of course new emerging tech. I love to learn new languages and am recently learning Japanese (aside from the 3 languages that I already speak fluently). I write blog posts on Medium from time to time related to my tech journey. I like to do journaling and I like to learn about foreign cultures and their food and heritage and try to understand why they are who they are. I believe that tech is just another medium to make lives better and more fulfilling and not life itself. Tech is the art of the 21st century and in this ever-evolving era of AI where almost no aspect of modern human life is left untouched by either recommendation algorithms or machine learning, I believe that every human should have at least a rudimentary understanding of tech which is why I have also decided to start a Youtube Channel where I will start uploading content shortly.</p>
                
            </div>
            <button onClick={handleReadMoreClick} className="md:inline-block text-blue-500 mr-10 ml-10">{isExpanded ? 'Read less' : 'Read more'}</button>
        </>
    )
}