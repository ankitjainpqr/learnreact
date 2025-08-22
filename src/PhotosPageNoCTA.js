import React, { useState } from 'react';
import './PhotosPage.css';

const PhotosPageNoCTA = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample product data with multiple photos
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299.99",
      category: "Electronics",
      rating: 4.8,
      reviews: 1247,
      photos: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=400&h=400&fit=crop"
      ]
    },
    {
      id: 2,
      name: "Vintage Leather Jacket",
      price: "$189.99",
      category: "Fashion",
      rating: 4.6,
      reviews: 892,
      photos: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1521223890158-4d85c41d0b2d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: "$199.99",
      category: "Electronics",
      rating: 4.7,
      reviews: 2156,
      photos: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Handcrafted Ceramic Vase",
      price: "$89.99",
      category: "Home & Garden",
      rating: 4.9,
      reviews: 567,
      photos: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop"
      ]
    },
    {
      id: 5,
      name: "Organic Cotton T-Shirt",
      price: "$34.99",
      category: "Fashion",
      rating: 4.5,
      reviews: 2341,
      photos: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop"
      ]
    },
    {
      id: 6,
      name: "Professional Camera Lens",
      price: "$1,299.99",
      category: "Electronics",
      rating: 4.9,
      reviews: 423,
      photos: [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1510127034890-ba275aee457a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop"
      ]
    },
    {
      id: 7,
      name: "Designer Sunglasses",
      price: "$159.99",
      category: "Fashion",
      rating: 4.7,
      reviews: 892,
      photos: [
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop"
      ]
    },
    {
      id: 8,
      name: "Wireless Bluetooth Speaker",
      price: "$129.99",
      category: "Electronics",
      rating: 4.6,
      reviews: 1567,
      photos: [
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"
      ]
    }
  ];

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="photos-page">
      {/* Fixed Blue Header */}
      <header className="fixed-header">
        <div className="header-content">
          <div className="logo">MarketPlace</div>
          <nav className="nav-tabs">
            <a href="#" className="nav-tab">Home</a>
            <a href="#" className="nav-tab">About Us</a>
            <a href="#" className="nav-tab active">Photos</a>
            <a href="#" className="nav-tab">Videos</a>
            <a href="#" className="nav-tab">Categories</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Photos Heading Section */}
        <section className="photos-hero">
          <div className="container">
            <h1 className="photos-title">Product Gallery</h1>
            <p className="photos-subtitle">
              Explore our complete collection through high-quality product photography
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">{products.length}</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat">
                <span className="stat-number">
                  {products.reduce((total, product) => total + product.photos.length, 0)}
                </span>
                <span className="stat-label">Photos</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.8</span>
                <span className="stat-label">Avg Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="product-gallery">
          <div className="container">
            <div className="gallery-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-meta">
                      <span className="product-price">{product.price}</span>
                      <span className="product-category">{product.category}</span>
                    </div>
                    <div className="product-rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="product-photos">
                    {product.photos.map((photo, index) => (
                      <div 
                        key={index} 
                        className="photo-item"
                        onClick={() => handleImageClick(photo)}
                      >
                        <img 
                          src={photo} 
                          alt={`${product.name} - Photo ${index + 1}`}
                          loading="lazy"
                        />
                        <div className="photo-overlay">
                          <span className="photo-number">{index + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Product detail" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosPageNoCTA;