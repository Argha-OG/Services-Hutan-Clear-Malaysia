import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "Services Hutan Clear Malaysia";
    const defaultDescription = "Professional tree cutting, land clearing, and forestry services in Malaysia. Expert team for tree removal, pruning, and site preparation.";
    const defaultKeywords = "Land Clearing Malaysia, Tree Cutting Services, Forestry Clearing, Site Preparation, Excavator Services, Bulldozer Rental, Biomass Removal, Plantation Replanting, Perkhidmatan Bersih Hutan, Potong Pokok, Tebang Pokok, Cuci Kebun, Sewa Jentera Berat, Excavator, Bulldozer, Tanam Semula Sawit, Meracun Pokok";
    const siteUrl = "https://serviceshutanclear.com.my"; // Update with actual domain if different
    const defaultImage = "/shcm.png"; // Ensure this matches your asset path

    return (
        <Helmet>
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English, Malay" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Canonical */}
            <link rel="canonical" href={url || siteUrl} />
        </Helmet>
    );
};

export default SEO;
