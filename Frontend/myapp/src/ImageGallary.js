import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Cont from './cont'

const ImageGallery = () => {
    const [categories, setCategories] = useState([]);
    const [allImages, setAllImages] = useState([]);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loadCount, setLoadCount] = useState(10);

    useEffect(() => {
        axios.get('https://carmach-solution.onrender.com/api/images/')
            .then(response => {
                setCategories(response.data);
                const images = response.data.reduce((acc, category) => {
                    return acc.concat(category.images);
                }, []);
                setAllImages(images);
                setVisibleImages(images.slice(0, loadCount));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setLoadCount(10);
        setVisibleImages(category.images.slice(0, 10));
    };

    const handleShowAllImages = () => {
        setSelectedCategory(null);
        setLoadCount(10);
        setVisibleImages(allImages.slice(0, 10));
    };

    const loadMoreImages = () => {
        setLoadCount(prevCount => prevCount + 10);
        setVisibleImages(prevVisible => {
            const newImages = selectedCategory
                ? selectedCategory.images.slice(0, loadCount + 10)
                : allImages.slice(0, loadCount + 10);
            return newImages;
        });
    };

    const gridItemStyles = [
        { gridColumn: 'span 3', gridRow: 'span 2' },
        { gridColumn: 'span 2', gridRow: 'span 1' },
        { gridColumn: 'span 2', gridRow: 'span 1' },
        { gridColumn: 'span 2', gridRow: 'span 1' },
        { gridColumn: 'span 2', gridRow: 'span 1' },
        { gridColumn: 'span 1', gridRow: 'span 2' },
        { gridColumn: 'span 4', gridRow: 'span 1' },
        { gridColumn: 'span 2', gridRow: 'span 1' },
        { gridColumn: 'span 3', gridRow: 'span 1' },
        { gridColumn: 'span 2', gridRow: 'span 4' },
        { gridColumn: 'span 1', gridRow: 'span 3' },
        { gridColumn: 'span 2', gridRow: 'span 2' },
        { gridColumn: 'span 2', gridRow: 'span 1' },
        { gridColumn: 'span 3', gridRow: 'span 1' },
    ];

    return (
        <div className="body">
            <a href="top"></a>
            <div id="oo">
                <a href="#top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0" />
                    </svg>
                </a>
            </div>
            <Navbar />
            <div className="about d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center mx-auto">
                            <h1 className="text-success">Gallery
                                <div className="background-text">IMAGE</div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-4'>
                <div className="text-center mb-4">
                    <h1 style={{ fontSize: '130px' }}>Our Latest Works</h1>
                    <br />
                    <button className="btn mx-2" onClick={handleShowAllImages}>
                        Show All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className="btn mx-2"
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category.category_name}
                        </button>
                    ))}
                </div>
                <br />
                <div className="image-grid">
                    {(selectedCategory ? selectedCategory.images : allImages).map((image, index) => {
                        const imageUrl = `https://carmach-solution.onrender.com${image.image}`;
                        return (
                            <div
                                className="grid-item"
                                key={image.id}
                                style={gridItemStyles[index % gridItemStyles.length]}
                            >
                                <img src={imageUrl} alt="" className="img-fluid" />
                            </div>
                        );
                    }).slice(0, visibleImages.length)}
                </div>
                <br />
                <br />
                {selectedCategory === null && visibleImages.length < allImages.length && (
                    <div className="text-center mt-4">
                        <button className="btn" style={{ width: "100%" }} onClick={loadMoreImages}>
                            Load More..
                        </button>
                    </div>
                )}
            </div>
            <br />
            <br />
            <Cont />
        </div>
    );
};

export default ImageGallery;



