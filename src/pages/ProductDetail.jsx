import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductDetail } from '../services/productService';
import './ProductDetail.css';

// Local Database with Men's (Previous) and Women's (NEW) IMAGES
const productDatabase = {
  // ==========================
  // MEN'S WEAR (Existing)
  // ==========================
  'mens-wear-1': {
    id: 1,
    name: 'White and Red Khaddi Shirt',
    category: 'shirts',
    gender: 'men',
    price: '₹2,800',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20AND%20RED%20KHADDI%20SHIRT.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20AND%20RED%20KHADDI%20SHIRT.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White/Red', 'Off-White'],
    description: 'A premium Khaddi shirt featuring elegant red detailing. Crafted from breathable fabric, this shirt offers a perfect blend of tradition and modern style.',
    details: 'Organic Khaddi Fabric with Red Accents',
    care: 'Hand wash with mild detergent. Dry inside out in shade.',
    sizeChart: {
      top: [
        { size: 'XS', chest: '40', waist: '38', hips: '40', length: '28' },
        { size: 'S', chest: '42', waist: '40', hips: '42', length: '29' },
        { size: 'M', chest: '44', waist: '42', hips: '44', length: '30' },
        { size: 'L', chest: '46', waist: '44', hips: '46', length: '31' }
      ]
    }
  },
  'mens-wear-6': {
    id: 6,
    name: 'Black Khadi Shirt',
    category: 'shirts',
    gender: 'men',
    price: '₹3,500',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/BLACK%20KHADI%20SHIRT%20AND%20BLACK%20KHADI%20PANT.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/BLACK%20KHADI%20SHIRT%20AND%20BLACK%20KHADI%20PANT.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal'],
    description: 'A sophisticated Black Khadi shirt that pairs perfectly with formal or casual trousers.',
    details: 'Authentic Handwoven Khadi',
    care: 'Hand wash separately in cold water.',
    sizeChart: {
      top: [
        { size: 'S', chest: '42', waist: '40', hips: '42', length: '29' },
        { size: 'M', chest: '44', waist: '42', hips: '44', length: '30' }
      ]
    }
  },
  'mens-wear-7': {
    id: 7,
    name: 'Mustard Yellow Khadi Shirt',
    category: 'shirts',
    gender: 'men',
    price: '₹2,900',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/MUSTARD%20YELLOW%20KHADI%20SHIRT.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/MUSTARD%20YELLOW%20KHADI%20SHIRT.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Mustard'],
    description: 'A vibrant Mustard Yellow Khadi shirt that adds a pop of color to your wardrobe.',
    details: '100% Handwoven Khadi Cotton',
    care: 'Hand wash separately. Dry in shade.',
    sizeChart: { top: [] } // Abbreviated for brevity
  },
  'mens-wear-8': {
    id: 8,
    name: 'White and Yellow Khadi Shirt',
    category: 'shirts',
    gender: 'men',
    price: '₹3,100',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20AND%20YELLOW%20SHIRT%20BUTTON.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20AND%20YELLOW%20SHIRT%20BUTTON.jpg'
    ],
    sizes: ['S', 'M', 'L'],
    colors: ['White', 'Yellow/White'],
    description: 'A classic White Khadi shirt with subtle yellow accents.',
    details: 'Premium Organic Khadi',
    care: 'Hand wash gently.',
    sizeChart: { top: [] }
  },
  'mens-wear-9': {
    id: 9,
    name: 'White Khadi Shirt with Blazer',
    category: 'blazers-jackets',
    gender: 'men',
    price: '₹5,500',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20KHADI%20SHIRT%20WITH%20BLAZER.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20KHADI%20SHIRT%20WITH%20BLAZER.jpg'
    ],
    sizes: ['38', '40', '42'],
    colors: ['White/Grey'],
    description: 'A sophisticated combination featuring a premium White Khadi shirt paired with a textured blazer.',
    details: 'Set includes: 1 Khadi Shirt and 1 Linen-Blend Blazer',
    care: 'Dry clean only for blazer.',
    sizeChart: { top: [] }
  },

  // ==========================
  // WOMEN'S WEAR (NEW UPDATED LIST)
  // ==========================
  'womens-wear-1': {
    id: 1,
    name: 'White Khadi Set with Corset',
    category: 'co-ords',
    gender: 'women',
    price: '₹4,500',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20KHADI%20SET%20WITH%20CORSET.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20KHADI%20SET%20WITH%20CORSET.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White'],
    description: 'A contemporary take on traditional Khadi, featuring a structured corset top paired with comfortable bottoms. The perfect fusion of modern fashion and sustainable fabric.',
    details: '100% Handwoven Khadi Cotton. Includes Top and Bottom.',
    care: 'Dry clean recommended or gentle hand wash in cold water.',
    sizeChart: {
      top: [
        { size: 'XS', chest: '32', waist: '26', hips: '36', length: '16' },
        { size: 'S', chest: '34', waist: '28', hips: '38', length: '16.5' },
        { size: 'M', chest: '36', waist: '30', hips: '40', length: '17' },
        { size: 'L', chest: '38', waist: '32', hips: '42', length: '17.5' }
      ]
    }
  },
  'womens-wear-2': {
    id: 2,
    name: 'White and Red Khadi Dress',
    category: 'dresses',
    gender: 'women',
    price: '₹3,800',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20AND%20RED%20KHADI%20DRESS.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/WHITE%20AND%20RED%20KHADI%20DRESS.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White/Red'],
    description: 'An elegant white dress accented with striking red borders. Made from breathable Khadi fabric, it is ideal for summer gatherings and festive occasions.',
    details: 'Hand-spun Khadi with natural red dye accents.',
    care: 'Hand wash separately. Do not bleach.',
    sizeChart: {
      top: [
        { size: 'XS', chest: '34', waist: '30', hips: '40', length: '46' },
        { size: 'S', chest: '36', waist: '32', hips: '42', length: '46' },
        { size: 'M', chest: '38', waist: '34', hips: '44', length: '47' },
        { size: 'L', chest: '40', waist: '36', hips: '46', length: '47' }
      ]
    }
  },
  'womens-wear-3': {
    id: 3,
    name: 'Red Ajrakh Dress',
    category: 'dresses',
    gender: 'women',
    price: '₹3,500',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/RED%20AJRAKH%20DRESS.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/RED%20AJRAKH%20DRESS.jpg'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red/Black'],
    description: 'A stunning dress featuring traditional Ajrakh block prints. The rich red hues and intricate geometric patterns make this a standout piece.',
    details: 'Authentic Ajrakh block print on Cotton.',
    care: 'Hand wash with mild detergent. Color may bleed slightly in first wash.',
    sizeChart: {
      top: [
        { size: 'S', chest: '36', waist: '32', hips: '42', length: '48' },
        { size: 'M', chest: '38', waist: '34', hips: '44', length: '48' },
        { size: 'L', chest: '40', waist: '36', hips: '46', length: '49' }
      ]
    }
  },
  'womens-wear-4': {
    id: 4,
    name: 'Mustard Yellow Khadi Set',
    category: 'co-ords',
    gender: 'women',
    price: '₹4,200',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/MUSTARD%20YELLOW%20KHADI%20SET.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/MUSTARD%20YELLOW%20KHADI%20SET.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Mustard Yellow'],
    description: 'Brighten up your day with this vibrant Mustard Yellow Khadi set. Features a relaxed fit top and matching trousers for effortless style.',
    details: 'Organic Khadi. Set includes Top and Trousers.',
    care: 'Hand wash in cold water. Dry in shade.',
    sizeChart: {
      top: [
        { size: 'S', chest: '36', waist: '34', hips: '40', length: '26' },
        { size: 'M', chest: '38', waist: '36', hips: '42', length: '27' },
        { size: 'L', chest: '40', waist: '38', hips: '44', length: '28' }
      ],
      bottom: [
        { size: 'S', waist: '28', hips: '40', length: '38' },
        { size: 'M', waist: '30', hips: '42', length: '39' },
        { size: 'L', waist: '32', hips: '44', length: '40' }
      ]
    }
  },
  'womens-wear-5': {
    id: 5,
    name: 'Blue and Red Ajrakh Print Dress',
    category: 'dresses',
    gender: 'women',
    price: '₹3,600',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/BLUE%20AND%20RED%20AJRAKH%20PRINT%20DRESS.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/BLUE%20AND%20RED%20AJRAKH%20PRINT%20DRESS.jpg'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue/Red'],
    description: 'A beautiful fusion of Indigo blue and deep red Ajrakh prints. This flowing dress is perfect for casual outings or work wear.',
    details: 'Natural Dye Ajrakh Print.',
    care: 'Hand wash separately. Use mild detergent.',
    sizeChart: {
      top: [
        { size: 'S', chest: '36', waist: '32', hips: '42', length: '46' },
        { size: 'M', chest: '38', waist: '34', hips: '44', length: '47' },
        { size: 'L', chest: '40', waist: '36', hips: '46', length: '48' }
      ]
    }
  },
  'womens-wear-6': {
    id: 6,
    name: 'Black Khadi Set',
    category: 'co-ords',
    gender: 'women',
    price: '₹4,000',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/BLACK%20KHADI%20SET.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/BLACK%20KHADI%20SET.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black'],
    description: 'Classic and sophisticated, this Black Khadi Set is a wardrobe essential. Minimalist design meets maximum comfort.',
    details: 'Handwoven Black Khadi. Set includes Kurta and Pant.',
    care: 'Hand wash in cold water. Iron on reverse.',
    sizeChart: {
      top: [
        { size: 'S', chest: '36', waist: '34', hips: '40', length: '36' },
        { size: 'M', chest: '38', waist: '36', hips: '42', length: '37' },
        { size: 'L', chest: '40', waist: '38', hips: '44', length: '38' }
      ]
    }
  },
  'womens-wear-7': {
    id: 7,
    name: 'Ajrakh Print Set',
    category: 'co-ords',
    gender: 'women',
    price: '₹4,800',
    salePrice: null,
    images: [
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/AJRAKH%20SET.jpg',
      'https://smrgampincrwtgtbnzon.supabase.co/storage/v1/object/public/product-images/product%20images/AJRAKH%20SET.jpg'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Multi/Red'],
    description: 'A luxurious co-ord set featuring all-over Ajrakh prints. This set exudes traditional charm with a modern silhouette.',
    details: 'Premium Cotton with Traditional Block Print.',
    care: 'Dry clean recommended for first wash.',
    sizeChart: {
      top: [
        { size: 'S', chest: '36', waist: '32', hips: '40', length: '34' },
        { size: 'M', chest: '38', waist: '34', hips: '42', length: '35' },
        { size: 'L', chest: '40', waist: '36', hips: '44', length: '36' }
      ]
    }
  }
};

// Helper to fill in other products if they don't exist in the detailed DB above
const addProduct = (key, product, gender) => {
  if (!productDatabase[key]) {
    productDatabase[key] = {
      ...product,
      gender,
      images: [product.image, product.image],
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Default'],
      description: `${product.name} crafted with premium sustainable fabrics for timeless elegance.`,
      details: 'Handwoven Fabric and Organic Cotton',
      care: 'Hand wash with mild detergent. Dry inside out in shade.',
      sizeChart: {
        top: [
          { size: 'S', chest: '38', waist: '36', hips: '40', length: '28' },
          { size: 'M', chest: '40', waist: '38', hips: '42', length: '29' }
        ]
      }
    };
  }
};

// Men's filler products (same as before)
const menProducts = [
  { key: 'mens-wear-2', product: { id: 2, name: 'Linen Trousers', price: '₹3,200', category: 'trousers', image: '...' }, gender: 'men' },
  { key: 'mens-wear-3', product: { id: 3, name: 'Cotton Co-ord Set', price: '₹4,500', category: 'co-ords', image: '...' }, gender: 'men' },
  { key: 'mens-wear-4', product: { id: 4, name: 'Blazer Jacket', price: '₹6,500', category: 'blazers-jackets', image: '...' }, gender: 'men' },
];

menProducts.forEach(({ key, product, gender }) => addProduct(key, product, gender));

// We don't need the womenProducts array filler anymore because we defined all 7 items
// explicitly in productDatabase above.

const ProductDetail = () => {
  const { productSlug } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        // First try to check our local database for immediate updates
        if (productDatabase[productSlug]) {
            setProduct(productDatabase[productSlug]);
        } else {
            // Fallback to service
            const data = await fetchProductDetail(productSlug);
            setProduct(data);
        }
      } catch (error) {
        console.log('Using local fallback for product');
        setProduct(productDatabase[productSlug]);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [productSlug]);

  if (loading) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <div className="product-not-found">
            <h2>Product not found</h2>
            <Link to="/" className="back-link">Return to home</Link>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbPath = product.gender === 'men' 
    ? `/shop/mens-wear?category=${product.category}`
    : `/shop/womens-wear?category=${product.category}`;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    alert('Product added to cart!');
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    alert('Redirecting to checkout...');
  };

  const increaseQuantity = () => {
    setQuantity(qty => qty + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(qty => (qty > 1 ? qty - 1 : 1));
  };

  const nextImage = () => {
    setSelectedImageIndex(prev => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex(prev => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={breadcrumbPath}>{product.gender === 'men' ? "Men's Wear" : "Women's Wear"}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-container">
          <div className="product-images">
            <div className="main-image-wrapper">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="main-product-image"
              />
              {product.images.length > 1 && (
                <>
                  <button className="image-nav-btn prev-btn" onClick={prevImage}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button className="image-nav-btn next-btn" onClick={nextImage}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                  <div className="image-counter">
                    {selectedImageIndex + 1} / {product.images.length}
                  </div>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="thumbnail-images">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail-btn ${selectedImageIndex === index ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-info">
            <h1 className="product-detail-title">{product.name}</h1>
            <div className="product-price-section">
              <div className="price-row">
                <span className="price-label">Regular price</span>
                {product.salePrice ? (
                  <>
                    <span className="original-price">{product.price}</span>
                    <span className="sale-price">{product.salePrice}</span>
                  </>
                ) : (
                  <span className="regular-price">{product.price}</span>
                )}
              </div>
              {product.salePrice && (
                <span className="price-label">Sale price</span>
              )}
              <span className="unit-price">Unit price / per</span>
            </div>

            <div className="product-options">
              <div className="option-group">
                <label className="option-label">Size</label>
                <select
                  className="option-select"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="">Select Size</option>
                  {product.sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div className="option-group">
                <label className="option-label">Color</label>
                <select
                  className="option-select"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="">Select Color</option>
                  {product.colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              <div className="quantity-group">
                <label className="option-label">Quantity</label>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn decrease"
                    onClick={decreaseQuantity}
                    aria-label="Decrease quantity"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                  <span className="quantity-value">{quantity} in cart</span>
                  <button 
                    className="quantity-btn increase"
                    onClick={increaseQuantity}
                    aria-label="Increase quantity"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add To Cart
              </button>
              <button className="buy-now-btn" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>

            <div className="product-tabs">
              <button 
                className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button 
                className={`tab-btn ${activeTab === 'care' ? 'active' : ''}`}
                onClick={() => setActiveTab('care')}
              >
                Care
              </button>
              <button 
                className={`tab-btn ${activeTab === 'size' ? 'active' : ''}`}
                onClick={() => setActiveTab('size')}
              >
                Size
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'description' && (
                <div className="tab-panel">
                  <p>{product.description}</p>
                </div>
              )}
              {activeTab === 'details' && (
                <div className="tab-panel">
                  <p>{product.details}</p>
                </div>
              )}
              {activeTab === 'care' && (
                <div className="tab-panel">
                  <p>{product.care}</p>
                </div>
              )}
              {activeTab === 'size' && product.sizeChart && (
                <div className="tab-panel">
                  {product.sizeChart.top && (
                    <>
                      <h4>Top Size</h4>
                      <table className="size-table">
                        <thead>
                          <tr>
                            <th>Size In Inches</th>
                            <th>Chest</th>
                            <th>Waist</th>
                            <th>Hips</th>
                            <th>Length</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.sizeChart.top.map(row => (
                            <tr key={row.size}>
                              <td>{row.size}</td>
                              <td>{row.chest}</td>
                              <td>{row.waist}</td>
                              <td>{row.hips}</td>
                              <td>{row.length}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}
                  {product.sizeChart.bottom && (
                    <>
                      <h4>Bottom Size</h4>
                      <table className="size-table">
                        <thead>
                          <tr>
                            <th>Size In Inches</th>
                            <th>Waist</th>
                            <th>Hips</th>
                            <th>Length</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.sizeChart.bottom.map(row => (
                            <tr key={row.size}>
                              <td>{row.size}</td>
                              <td>{row.waist}</td>
                              <td>{row.hips}</td>
                              <td>{row.length}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;