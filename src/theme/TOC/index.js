import React, { useState, useRef, useEffect } from 'react';
import TOC from '@theme-original/TOC';
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
        <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z" />
    </svg>
);

export default function TOCWrapper(props) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();
    const {
        siteConfig: { organizationName, projectName },
    } = useDocusaurusContext();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Get the paths for the markdown file
    const getMarkdownPaths = () => {
        const path = location.pathname;
        // Remove trailing slash if exists
        const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;
        const contentPath = `${cleanPath}/content.md`;
        return { contentPath };
    };

    const handleCopyMarkdown = async (e) => {
        e.preventDefault();
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

    const toggleDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const { contentPath } = getMarkdownPaths();

    return (
        <div className="toc-wrapper">
            <TOC {...props} />
            <div className={styles.markdown} ref={dropdownRef}>
                <div onClick={toggleDropdown} className={styles.markdownButton}>
                    <span>Markdown</span>
                </div>
                <div className={`${styles.dropdownContainer} ${isOpen ? styles.dropdownOpen : ''}`}>
                    <button onClick={handleCopyMarkdown} className={styles.dropdownItem}>
                        <CopyIcon />
                        Copy Markdown
                    </button>
                    <a href={contentPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.dropdownItem}
                        onClick={() => setIsOpen(false)}>
                        <ViewIcon />
                        View Markdown
                    </a>
                </div>
            </div>
        </div>
    );
} 