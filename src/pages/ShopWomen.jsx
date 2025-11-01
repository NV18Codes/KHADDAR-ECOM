import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { fetchProducts, fetchCategories } from '../services/productService';
import './Shop.css';

const ShopWomen = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category);
  }, [searchParams]);

  // Fetch categories on component mount
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories('women');
        setCategories(data);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };
    loadCategories();
  }, []);

  // Fetch products when category changes
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts('women', selectedCategory);
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [selectedCategory]);

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);

  if (loading) {
    return (
      <div className="shop-page">
        <div className="shop-products">
          <div className="container">
            <p style={{ textAlign: 'center', padding: '60px 20px' }}>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-page">
      <div className="shop-products">
        <div className="container">
          {selectedCategoryData ? (
            <>
              <h2 className="products-category-title">{selectedCategoryData.name}</h2>
              <p className="category-description">{selectedCategoryData.description}</p>
            </>
          ) : (
            <h2 className="products-category-title">All Products</h2>
          )}
          {products.length > 0 ? (
            <div className="products-grid">
              {products.map((product, index) => (
                <div 
                  key={product.id} 
                  className="product-card"
                  onClick={() => navigate(`/product/womens-wear-${product.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.name} className="product-image" />
                    {index < 2 && <span className="product-badge">New</span>}
                    <button 
                      className="product-choose-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/product/womens-wear-${product.id}`);
                      }}
                    >
                      Choose options
                    </button>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-price">
                      <span className="price-label">Regular price</span>
                      <span className="price-value">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-products">No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopWomen;

