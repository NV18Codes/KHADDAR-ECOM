import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { fetchCategories } from '../services/productService';
import './Shop.css';

// Define the updated products list locally
const localMenProducts = [
  { 
    id: 1, 
    name: 'White and Red Khaddi Shirt', 
    price: '₹2,800', 
    category: 'shirts', 
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20AND%20RED%20KHADDI%20SHIRT.jpg' 
  },
  { 
    id: 2, 
    name: 'Linen Trousers', 
    price: '₹3,200', 
    category: 'trousers', 
    image: 'https://images.unsplash.com/photo-1624378515199-9a1fd46859f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' 
  },
  { 
    id: 3, 
    name: 'Cotton Co-ord Set', 
    price: '₹4,500', 
    category: 'co-ords', 
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 4, 
    name: 'Blazer Jacket', 
    price: '₹6,500', 
    category: 'blazers-jackets', 
    image: 'https://images.unsplash.com/photo-1594938291221-94fa82b6e683?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 5, 
    name: 'Handwoven Kurta', 
    price: '₹3,800', 
    category: 'kurtas', 
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 6, 
    name: 'Black Khadi Shirt', 
    price: '₹3,500', 
    category: 'shirts', 
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/BLACK%20KHADI%20SHIRT%20AND%20BLACK%20KHADI%20PANT.jpg' 
  },
  { 
    id: 7, 
    name: 'Mustard Yellow Khadi Shirt', 
    price: '₹2,900', 
    category: 'shirts', 
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/MUSTARD%20YELLOW%20KHADI%20SHIRT.jpg' 
  },
  { 
    id: 8, 
    name: 'White and Yellow Khadi Shirt', 
    price: '₹3,100', 
    category: 'shirts', 
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20AND%20YELLOW%20SHIRT%20BUTTON.jpg' 
  },
  // NEW ITEM 9
  { 
    id: 9, 
    name: 'White Khadi Shirt with Blazer', 
    price: '₹5,500', 
    category: 'blazers-jackets', 
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20KHADI%20SHIRT%20WITH%20BLAZER.jpg' 
  }
];

const ShopMen = () => {
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

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories('men');
        setCategories(data);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let filteredProducts = localMenProducts;
      if (selectedCategory) {
        filteredProducts = localMenProducts.filter(
          p => p.category === selectedCategory
        );
      }
      setProducts(filteredProducts);
      setLoading(false);
    }, 300);
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
                  onClick={() => navigate(`/product/mens-wear-${product.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.name} className="product-image" />
                    {/* Badge logic: Show 'New' on our new items */}
                    {(product.id === 1 || product.id >= 6) && <span className="product-badge">New</span>}
                    <button 
                      className="product-choose-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/product/mens-wear-${product.id}`);
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

export default ShopMen;