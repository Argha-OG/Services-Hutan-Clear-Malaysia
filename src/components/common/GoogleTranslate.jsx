import React, { useEffect } from 'react';

const GoogleTranslate = ({ id = 'google_translate_element' }) => {
    useEffect(() => {
        // Check if script is already present
        let script = document.querySelector('script[src*="//translate.google.com/translate_a/element.js"]');

        if (!script) {
            script = document.createElement('script');
            script.type = 'text/javascript';
            // Removing the cb parameter to avoid reliance on a single global callback
            script.src = '//translate.google.com/translate_a/element.js';
            script.async = true;
            document.body.appendChild(script);
        }

        // Poll until google.translate is available
        const checkInterval = setInterval(() => {
            if (window.google && window.google.translate && window.google.translate.TranslateElement) {
                clearInterval(checkInterval);
                try {
                    // Initialize the widget for this specific element ID
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: 'en',
                            includedLanguages: 'en,ms',
                            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                            autoDisplay: false
                        },
                        id
                    );
                } catch (e) {
                    console.error("Google Translate initialization failed", e);
                }
            }
        }, 300); // Check every 300ms

        return () => clearInterval(checkInterval);
    }, [id]);

    return <div id={id}></div>;
};

export default GoogleTranslate;
