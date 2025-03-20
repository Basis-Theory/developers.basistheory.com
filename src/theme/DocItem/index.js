import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DocItem from '@theme-original/DocItem';
import DocItemHeader from '@theme/DocItem/Header';

export default function DocItemWrapper(props) {
    const [titleElement, setTitleElement] = useState(null);

    useEffect(() => {
        const header = document.querySelector('.theme-doc-markdown header');
        if (header) {
            header.style.display = 'flex';
            header.style.alignItems = 'flex-start';
            header.style.gap = '1rem';
            header.style.justifyContent = 'space-between';
            setTitleElement(header);

            return () => {
                header.style.display = '';
                header.style.alignItems = '';
                header.style.gap = '';
                header.style.justifyContent = '';
            };
        }
    }, []);

    return (
        <>
            {titleElement && createPortal(
                <DocItemHeader />,
                titleElement
            )}
            <DocItem {...props} />
        </>
    );
} 