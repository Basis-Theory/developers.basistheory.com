import React, { useEffect } from 'react';
import styles from "./KapaButton.module.css";
import clsx from "clsx";
declare global {
    interface Window {
        Kapa?: {
            open: () => void;
        };
    }
}

export const KapaButton: React.FC = () => {
    const handleClick = () => {
        if (window.Kapa && typeof window.Kapa.open === 'function') {
            window.Kapa.open();
        }
    };

    console.log(styles);

    return (
        <div className={clsx([styles.container])}>
            <button onClick={handleClick}></button>
        </div>
    );
};

export default KapaButton; 