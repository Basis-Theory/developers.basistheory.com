import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DocItem from '@theme-original/DocItem';
import DocItemHeader from '@theme/DocItem/Header';

export default function DocItemWrapper(props) {
    const [titleElement, setTitleElement] = useState(null);

    useEffect(() => {
        const header = document.querySelector('.theme-doc-markdown header');
        if (header) {
            setTitleElement(header);
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