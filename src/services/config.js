/**
 * API Configuration
 * 
 * To switch from mock data to real API:
 * 1. Set USE_MOCK_DATA to false
 * 2. Update API_BASE_URL with your backend URL
 * 3. Ensure backend API endpoints match the expected format
 */

export const API_CONFIG = {
  // Set to false when ready to use real API
  USE_MOCK_DATA: true,
  
  // Your backend API base URL
  // Can also be set via environment variable: REACT_APP_API_BASE_URL
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 'https://api.yourdomain.com/api',
  
  // API endpoints (relative to base URL)
  ENDPOINTS: {
    PRODUCTS: '/products',
    PRODUCT_DETAIL: '/products/:slug',
    CATEGORIES: '/categories',
    CART: '/cart',
    ORDERS: '/orders',
    AUTH: '/auth'
  },
  
  // Request timeout in milliseconds
  TIMEOUT: 10000
};

