import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import "./ReactConfetti.css";

const ReactConfetti = () => {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confettiRef = useRef(null);

    useEffect(() => {
        setHeight(confettiRef.current.clientHeight);
        setWidth(confettiRef.current.clientWidth);
    }, [])

    return (
        <div className="main">
            <div
                className="confetti-wrap"
                ref={confettiRef}>
                <h3>New! 10 Best Headless CMS for your JAMStack website.</h3>
                <Confetti
                    numberOfPieces={100}
                    width={width}
                    height={height}
                    gravity={0.01}
                    opacity={90}
                />
            </div>
        </div>
    );
};

export default ReactConfetti;