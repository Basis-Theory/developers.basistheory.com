import React from 'react';
import TOC from '@theme-original/TOC';

export default function TOCWrapper(props) {
    return (
        <div className="toc-wrapper">
            <TOC {...props} />
        </div>
    );
} 