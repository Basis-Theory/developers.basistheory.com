import React, { useEffect, useRef } from 'react';
import DocItem from '@theme-original/DocItem';
import DocItemHeader from '@theme/DocItem/Header';

export default function DocItemWrapper(props) {
    const titleRef = useRef(null);

    useEffect(() => {
        const titleContainer = document.querySelector('.theme-doc-markdown header');
        if (titleContainer && titleRef.current) {
            titleContainer.style.display = 'flex';
            titleContainer.style.alignItems = 'flex-start';
            titleContainer.style.gap = '1rem';
            titleContainer.style.justifyContent = 'space-between';

            titleContainer.appendChild(titleRef.current);
        }
    }, []);

    return (
        <>
            <div ref={titleRef}>
                <DocItemHeader />
            </div>
            <DocItem {...props} />
        </>
    );
} 