import {
    Axe,
    Scissors,
    Trees,
    Flower,
    Tractor,
    Construction,
    Trash2,
    Leaf,
    HardHat,
    AlertTriangle
} from 'lucide-react';

import img1 from "./../assets/img1.jpeg"
import img2 from "./../assets/img2.jpeg"
import img3 from "./../assets/img3.jpeg"
import img4 from "./../assets/img4.jpeg"
import img5 from "./../assets/img5.jpeg"
import img6 from "./../assets/img6.jpeg"
import img7 from "./../assets/img7.jpeg"
import img8 from "./../assets/img8.jpeg"
import img9 from "./../assets/img9.jpeg"

export const services = [
    {
        title: "Tree Cutting & Removal",
        description: "Safe and efficient removal of small, medium, and large trees.",
        icon: Axe,
        image: `${img1}?w=600&auto=format&fit=crop&q=60`
    },
    {
        title: "Tree Trimming & Pruning",
        description: "Shaping, trimming, and maintenance to promote healthy growth.",
        icon: Scissors,
        image: `${img2}?w=600&auto=format&fit=crop&q=60`
    },
    {
        title: "Grass Cutting & Lawn Maintenance",
        description: "Regular grass trimming and land cleaning services.",
        icon: Flower,
        image: `${img3}?w=600&auto=format&fit=crop&q=60`
    },
    {
        title: "Small & Large Tree Cutting",
        description: "Specialized cutting for all tree sizes (Choto & Boro Gach Kata).",
        icon: Trees,
        image: `${img4}?w=600&auto=format&fit=crop&q=60`
    },
    {
        title: "Forest & Jungle Clearing",
        description: "Complete land clearing for development or maintenance.",
        icon: Trees,
        image: `${img5}?w=600&auto=format&fit=crop&q=60`
    },
    {
        title: "Crane-Assisted Tree Cutting",
        description: "Professional crane services for high-risk or large tree removal.",
        icon: Construction,
        image: `${img6}?w=600&auto=format&fit=crop&q=60`
    },
    {
        title: "Stump Removal & Grinding",
        description: "Complete removal of tree stumps for clean land preparation.",
        icon: Trash2,
        image: `${img7}?w=600&auto=format&fit=crop&q=60`
    },
    {
        title: "Bush & Shrub Clearing",
        description: "Removal of unwanted bushes and thick vegetation.",
        icon: Leaf,
        image: `${img8}?w=600&auto=format&fit=crop&q=60`
    },
    {
        title: "Land Preparation & Site Clearing",
        description: "Preparing land for construction or landscaping projects.",
        icon: Tractor,
        image: `${img9}?w=600&auto=format&fit=crop&q=60`
    },
    {
        title: "Emergency Tree Removal",
        description: "Fast response for fallen or dangerous trees.",
        icon: AlertTriangle,
        image: `${img1}?w=600&auto=format&fit=crop&q=60`
    }
];

export const extraServices = [
    {
        category: "Construction & Renovation",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
        items: [
            { title: "House Renovation & Repair", desc: "Interior and exterior renovation services." },
            { title: "Office Renovation", desc: "Corporate office renovation and space improvement." },
            { title: "Construction Site Clearing", desc: "Site preparation for projects." },
            { title: "General Construction Support", desc: "Skilled manpower for work." }
        ]
    },
    {
        category: "Moving & Transport",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
        items: [
            { title: "House Shifting", desc: "Manpower and vehicle support." },
            { title: "Goods Transport", desc: "Safe handling of household/office items." }
        ]
    },
    {
        category: "Additional Support",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2Vyc3xlbnwwfHwwfHx8MA%3D%3D?q=80&w=800&auto=format&fit=crop",
        items: [
            { title: "Manpower Supply", desc: "Skilled & Unskilled Workers." },
            { title: "Cleaning Services", desc: "Post-construction deep cleaning." }
        ]
    }
];

export const videos = [
    {
        id: "1",
        title: "Tree Cutting Services",
        videoId: "bGzpjiO0FVQ", // Replace with actual YouTube Short ID
        thumbnail: "https://images.unsplash.com/photo-1590845947391-ba1349899c75?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "2",
        title: "Land Clearing",
        videoId: "kHxfTeMK_Cw", // Replace with actual YouTube Short ID
        thumbnail: "https://images.unsplash.com/photo-1734303023481-7508b5c9f1ff?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "3",
        title: "Expert Tree Removal",
        videoId: "MCpb6ecpzCA", // Replace with actual YouTube Short ID
        thumbnail: "https://images.unsplash.com/photo-1587998907224-ebfb40760dc7?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "4",
        title: "Expert Tree Removal",
        videoId: "nM1B_QdTKW4", // Replace with actual YouTube Short ID
        thumbnail: "https://images.unsplash.com/photo-1587998907224-ebfb40760dc7?q=80&w=800&auto=format&fit=crop"
    }
];
