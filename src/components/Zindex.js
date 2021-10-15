import React from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const MiddleIcon = styled(animated.div)`
  background-color: orange;
  width: 100px;
  height: 70px;
  border-radius: 10px;
`;

const Zindex = () => {
    const [middleIcon, set_middleIcon] = useSpring(() => ({
        scale: 1,
        boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
        zIndex: 0,
        config: {
            mass: 2,
            tension: 170,
            friction: 12
        },
        immediate: key => key === "zIndex"
    }));
    return (
        <MiddleIcon
            onMouseLeave={() =>
                set_middleIcon({
                    scale: 1,
                    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.62)",
                    zIndex: 0
                })
            }
            onMouseEnter={() =>
                set_middleIcon({
                    scale: 1.6,
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.42)",
                    zIndex: 1
                })
            }
            style={{
                transform: middleIcon.scale.interpolate(
                    s => `scale(${s}) rotateZ(.1deg)`
                ),
                boxShadow: middleIcon.boxShadow,
                zIndex: middleIcon.zIndex
            }}
        />

    );
};

export default Zindex;