import React from "react";
import styles from "./RatingBar.module.css";

const RatingBar = ({rating}) => {
    const filledWidth = (rating / 10) * 100;

    const barStyle = {
        width: `${filledWidth - 2}%`,
        height: "35px",
        background:
            "linear-gradient(270.00deg, rgb(252, 197, 57),rgb(220, 74, 25) 100%)",
    };

    return (
        <div className={styles.wrapper}>
            <div style={barStyle}></div>
            <div className={styles.numbers}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                </ul>
            </div>
        </div>
    );
};

export default RatingBar;
