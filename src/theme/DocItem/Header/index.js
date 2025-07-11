import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { Card } from "../../../components/shared/Card";

const CopyIcon = () => (
    <svg className={styles.dropdownIcon} viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z" />
        <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z" />
    </svg>
);

const ViewIcon = () => (
    <svg width="18" height="17" viewBox="0 0 18 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M9 1.625C5.20227 1.625 2.125 4.69558 2.125 8.5C2.125 12.2977 5.19558 15.375 9 15.375C12.7973 15.375 15.875 12.2973 15.875 8.5C15.875 4.70268 12.7973 1.625 9 1.625ZM0.875 8.5C0.875 4.00442 4.51273 0.375 9 0.375C13.4877 0.375 17.125 4.01232 17.125 8.5C17.125 12.9877 13.4877 16.625 9 16.625C4.50442 16.625 0.875 12.9873 0.875 8.5ZM7.77528 5.55806C8.01935 5.80214 8.01935 6.19786 7.77528 6.44194L6.55055 7.66667L7.77528 8.89139C8.01935 9.13547 8.01935 9.5312 7.77528 9.77527C7.5312 10.0194 7.13547 10.0194 6.89139 9.77527L5.22472 8.10861C4.98065 7.86453 4.98065 7.4688 5.22472 7.22472L6.89139 5.55806C7.13547 5.31398 7.5312 5.31398 7.77528 5.55806ZM10.2247 7.22472C10.4688 6.98065 10.8645 6.98065 11.1086 7.22472L12.7753 8.89139C13.0194 9.13547 13.0194 9.5312 12.7753 9.77527L11.1086 11.4419C10.8645 11.686 10.4688 11.686 10.2247 11.4419C9.98065 11.1979 9.98065 10.8021 10.2247 10.5581L11.4495 9.33333L10.2247 8.10861C9.98065 7.86453 9.98065 7.4688 10.2247 7.22472Z" />
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
        const contentPath = `${baseUrl}${cleanPath}.md`.replace(/\/+/g, '/');
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