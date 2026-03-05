import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import { useLocation } from 'react-router-dom';
import GalleryImg1 from "../../assets/images/gallery/g1.jpg"
import GalleryImg3 from "../../assets/images/gallery/g3.jpg"
import GalleryImg4 from "../../assets/images/gallery/g4.jpg"
import GalleryImg6 from "../../assets/images/gallery/g6.jpg"
import GalleryImg7 from "../../assets/images/gallery/g7.jpg"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Gallery = () => {
    const location = useLocation();
    const isGalleryPage = location.pathname === "/gallery";

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        {
            original: GalleryImg1,
            thumbnail: GalleryImg1,
            description: "Person wearing shoes",
            originalAlt: "Person wearing shoes",
            thumbnailAlt: "Person wearing shoes",
        },
        {
            original: GalleryImg3,
            thumbnail: GalleryImg3,
            description: "Blonde woman wearing sunglasses smiling at the camera",
            originalAlt: "Blonde woman wearing sunglasses smiling at the camera",
            thumbnailAlt: "Blonde woman wearing sunglasses smiling at the camera",
        },
        {
            original: GalleryImg6,
            thumbnail: GalleryImg6,
            description: "Photo by Harry Cunningham",
            originalAlt: "Photo by Harry Cunningham",
            thumbnailAlt: "Photo by Harry Cunningham",
        },
        {
            original: GalleryImg4,
            thumbnail: GalleryImg4,
            description: "Jaipur, Rajasthan India",
            originalAlt: "Jaipur, Rajasthan India",
            thumbnailAlt: "Jaipur, Rajasthan India",
        },
        {
            original: GalleryImg7,
            thumbnail: GalleryImg7,
            description: "Photo by Verne Ho",
            originalAlt: "Photo by Verne Ho",
            thumbnailAlt: "Photo by Verne Ho",
        },
        {
            original: GalleryImg6,
            thumbnail: GalleryImg6,
            description: "Rann of Kutch, India",
            originalAlt: "Rann of Kutch, India",
            thumbnailAlt: "Rann of Kutch, India",
        },
    ];

    const handleOpenLightbox = (index) => {
        setActiveIndex(index);
        setIsLightboxOpen(true);
    };

    const handleCloseLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <>
            {isGalleryPage && (
                <Breadcrumbs title="Gallery" pagename="Gallery" childnamed="d-none" />
            )}

            <div className={`gallery-wrapper ${isGalleryPage ? "gallery-wrapper--page" : "gallery-wrapper--home"}`}>
                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            type="button"
                            className="gallery-card"
                            onClick={() => handleOpenLightbox(index)}
                        >
                            <img
                                src={img.original}
                                alt={img.originalAlt}
                                className="gallery-card__img"
                            />
                            <div className="gallery-card__overlay">
                                <span className="gallery-card__label">View photo</span>
                                <span className="gallery-card__desc">{img.description}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {isLightboxOpen && (
                <div className="gallery-lightbox" onClick={handleCloseLightbox}>
                    <div
                        className="gallery-lightbox__inner"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="gallery-lightbox__close"
                            onClick={handleCloseLightbox}
                        >
                            &times;
                        </button>
                        <ImageGallery
                            items={images}
                            startIndex={activeIndex}
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showThumbnails={true}
                            onSlide={(currentIndex) => setActiveIndex(currentIndex)}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Gallery;