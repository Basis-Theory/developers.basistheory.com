import React from 'react';
import KapaButton from '../components/shared/KapaButton';

// Default implementation, that you can customize
export default function Root({ children }) {
    return (
        <>
            {children}
            <KapaButton />
        </>
    );
} 