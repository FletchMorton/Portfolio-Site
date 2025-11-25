import { useEffect, useState, useRef } from 'react'
import './rain.css'

export default function rain() {

    const rainRef = useRef(null);

    useEffect(() => {
        const rain = rainRef.current;

        for (let i = 0; i < 50; i++) {
            let drop = document.createElement('span');

            drop.style.setProperty('--position', Math.random() * 100 + `%`);
            drop.style.setProperty('--width', 2.5 + Math.random() * 2 + 'px');
            drop.style.setProperty('--height', 90 + Math.random() * 50 + `px`);
            drop.style.setProperty('--duration', 2 + Math.random() * 5 + `s`);
            drop.style.setProperty('--delay', Math.random() * 10 + `s`);
            drop.style.setProperty('--opacity', 0.05 + Math.random());

            rain.appendChild(drop);
        }

        // Delete drops if component unmounts
        return () => { rain.innerHTML = ''; };
    }, []);


    return(
        <>
        <div ref={rainRef} className="rain-div"></div>
        </>
    );

}