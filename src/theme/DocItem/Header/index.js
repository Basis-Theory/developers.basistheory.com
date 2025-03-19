import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const CopyIcon = () => (
    <svg className={styles.dropdownIcon} viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z" />
        <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z" />
    </svg>
);

const ViewIcon = () => (
    <svg className={styles.dropdownIcon} viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
);

export default function DocItemHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();
    const {
        siteConfig: { baseUrl },
    } = useDocusaurusContext();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [dropdownRef]);

    const getMarkdownPaths = () => {
        const path = location.pathname;
        const cleanPath = path.replace(new RegExp(`^${baseUrl}`), '').replace(/\/$/, '');
        const contentPath = `${baseUrl}${cleanPath}/content.md`.replace(/\/+/g, '/');
        return { contentPath };
    };

    const handleCopyMarkdown = async (e) => {
        e.stopPropagation();
        try {
            const { contentPath } = getMarkdownPaths();
            const response = await fetch(contentPath);
            if (!response.ok) throw new Error('Failed to fetch markdown content');
            const content = await response.text();
            await navigator.clipboard.writeText(content);
            setIsOpen(false);
        } catch (error) {
            console.error('Failed to copy markdown:', error);
        }
    };

    const handleButtonClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const { contentPath } = getMarkdownPaths();

    return (
        <div className={styles.markdown} ref={dropdownRef}>
            <button
                onClick={handleButtonClick}
                className={styles.markdownButton}
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true">
                Markdown
            </button>
            {isOpen && (
                <div className={styles.dropdownContainer}>
                    <button
                        onClick={handleCopyMarkdown}
                        className={styles.dropdownItem}
                        type="button">
                        <CopyIcon />
                        Copy
                    </button>
                    <button
                        onClick={() => {
                            window.open(contentPath, '_blank', 'noopener,noreferrer');
                            setIsOpen(false);
                        }}
                        className={styles.dropdownItem}
                        type="button">
                        <ViewIcon />
                        View
                    </button>
                </div>
            )}
        </div>
    );
} 