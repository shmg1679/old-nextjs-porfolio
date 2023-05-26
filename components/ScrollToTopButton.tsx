import React,{useState} from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const handleScrollToTop = () => {
        const topSection = document.getElementById('headers');
        if (topSection) {
        topSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    
    return (
        <button className="absolute bottom-9 right-2 h-16 w-16 z-10">
            <FaArrowCircleUp className='cursor-pointer text-blue-400' onClick={handleScrollToTop} size={35} />
        </button>
    );
};

export default ScrollToTopButton;
