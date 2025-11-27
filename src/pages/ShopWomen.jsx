import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Shop.css';

// MOVED OUTSIDE: Defining this array outside the component makes it stable.
// This fixes the ESLint warning because it doesn't change on re-renders.
const allWomenProducts = [
  {
    id: 1,
    name: 'White Khadi Set with Corset',
    category: 'co-ords',
    price: '₹4,500',
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20KHADI%20SET%20WITH%20CORSET.jpg'
  },
  {
    id: 2,
    name: 'White and Red Khadi Dress',
    category: 'dresses',
    price: '₹3,800',
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20AND%20RED%20KHADI%20DRESS.jpg'
  },
  {
    id: 3,
    name: 'Red Ajrakh Dress',
    category: 'dresses',
    price: '₹3,500',
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/RED%20AJRAKH%20DRESS.jpg'
  },
  {
    id: 4,
    name: 'Mustard Yellow Khadi Set',
    category: 'co-ords',
    price: '₹4,200',
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/MUSTARD%20YELLOW%20KHADI%20SET.jpg'
  },
  {
    id: 5,
    name: 'Blue and Red Ajrakh Print Dress',
    category: 'dresses',
    price: '₹3,600',
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/BLUE%20AND%20RED%20AJRAKH%20PRINT%20DRESS.jpg'
  },
  {
    id: 6,
    name: 'Black Khadi Set',
    category: 'co-ords',
    price: '₹4,000',
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/BLACK%20KHADI%20SET.jpg'
  },
  {
    id: 7,
    name: 'Ajrakh Print Set',
    category: 'co-ords',
    price: '₹4,800',
    image: 'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/AJRAKH%20SET.jpg'
  }
];

// MOVED OUTSIDE: Categories are also constant data.
const categories = [
  { id: 'dresses', name: 'Dresses', description: 'Elegant handcrafted dresses.' },
  { id: 'co-ords', name: 'Co-ord Sets', description: 'Matching sets for a complete look.' },
  { id: 'kurtas', name: 'Kurtas', description: 'Traditional wear.' }
];

const ShopWomen = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const category = searchParams.get('category');
    setSelectedCategory(category);
  }, [searchParams]);

  // Filter products based on category
  useEffect(() => {
    setLoading(true);
    // Simulate API delay slightly for effect
    const timer = setTimeout(() => {
      if (selectedCategory) {
        // filter is now running on the static external array
        setProducts(allWomenProducts.filter(p => p.category === selectedCategory));
      } else {
        setProducts(allWomenProducts);
      }
      setLoading(false);
    }, 300);

    // Cleanup timer to prevent memory leaks if component unmounts
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);

  if (loading) {
    return (
      <div className="shop-page">
        <div className="shop-products">
          <div className="container">
            <p style={{ textAlign: 'center', padding: '60px 20px' }}>Loading products...</p>
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
            <h2 className="products-category-title">Women's Collection</h2>
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