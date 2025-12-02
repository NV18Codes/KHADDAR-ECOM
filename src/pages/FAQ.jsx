import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import './FAQ.css';

const faqData = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping within India takes 5-7 business days. Express shipping (2-3 business days) is available for an additional charge. International shipping typically takes 10-15 business days depending on the destination.'
      },
      {
        question: 'How can I track my order?',
        answer: 'Once your order is shipped, you will receive an email with a tracking number. You can use this number to track your package on our website or the carrier\'s website. You can also check your order status in your account dashboard.'
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'Yes! We offer free standard shipping on all orders above ₹2,999 within India. For orders below this amount, a flat shipping fee of ₹99 applies.'
      },
      {
        question: 'Can I change my shipping address after placing an order?',
        answer: 'Address changes can be requested within 24 hours of placing your order. Please contact our customer service team immediately at orders@khaddar.com with your order number and the new address.'
      }
    ]
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We accept returns within 7 days of receiving your order. Items must be unused, unworn, and in their original packaging with all tags attached. Please visit our Refund Policy page for complete details.'
      },
      {
        question: 'How do I initiate a return?',
        answer: 'To initiate a return, please email us at returns@khaddar.com with your order number, the item(s) you wish to return, and the reason for the return. Our team will respond within 24-48 hours with return instructions.'
      },
      {
        question: 'How long does it take to receive my refund?',
        answer: 'Once we receive and inspect your return, we will process your refund within 5-7 business days. The refund will be credited to your original payment method. Please note that it may take an additional 3-5 business days for the refund to appear in your account.'
      },
      {
        question: 'Can I exchange an item instead of returning it?',
        answer: 'Yes, we offer exchanges for different sizes or colors of the same item, subject to availability. Please contact our customer service team to arrange an exchange.'
      }
    ]
  },
  {
    category: 'Products & Care',
    questions: [
      {
        question: 'How should I care for my Khaddar products?',
        answer: 'Our khadi products are best cared for with gentle hand washing in cold water with mild detergent. Avoid wringing; instead, gently squeeze out excess water and lay flat to dry. Iron on medium heat while slightly damp for best results.'
      },
      {
        question: 'Are your products sustainable?',
        answer: 'Yes! Sustainability is at the core of Khaddar. Our products are handwoven by artisans using traditional techniques, dyed with natural dyes, and made from organic cotton. We prioritize fair trade practices and support local communities.'
      },
      {
        question: 'What makes khadi fabric special?',
        answer: 'Khadi is a hand-spun and hand-woven fabric that has been part of Indian heritage for centuries. It is breathable, eco-friendly, and becomes softer with each wash. Each piece is unique due to the handmade process, making it a truly special fabric.'
      },
      {
        question: 'Do your products shrink after washing?',
        answer: 'Natural fabrics may experience minimal shrinkage (2-3%) after the first wash. We recommend following the care instructions provided with each product. Pre-washing in cold water before first use can help minimize any shrinkage.'
      }
    ]
  },
  {
    category: 'Payment & Security',
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept UPI, Credit/Debit Cards (Visa, Mastercard, Rupay), Net Banking, and Digital Wallets (Paytm, PhonePe, Google Pay). All transactions are secured with industry-standard encryption.'
      },
      {
        question: 'Is my payment information secure?',
        answer: 'Absolutely. We use SSL encryption and comply with PCI DSS standards to ensure your payment information is always protected. We never store your complete card details on our servers.'
      },
      {
        question: 'Can I pay in installments?',
        answer: 'Currently, we do not offer installment payment options. However, some credit cards may offer EMI options at checkout through your bank.'
      }
    ]
  },
  {
    category: 'Account & Orders',
    questions: [
      {
        question: 'How do I create an account?',
        answer: 'Click on the account icon in the header and select "Register". Fill in your details, verify your email with the OTP sent, and set your password. You can also checkout as a guest without creating an account.'
      },
      {
        question: 'I forgot my password. What should I do?',
        answer: 'Click on "Login" and then "Forgot Password". Enter your registered email address, and we\'ll send you a password reset link. Follow the link to create a new password.'
      },
      {
        question: 'Can I cancel my order?',
        answer: 'Orders can be cancelled within 24 hours of placing them, provided they haven\'t been shipped yet. Please contact us immediately at orders@khaddar.com with your order number to request cancellation.'
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openQuestions, setOpenQuestions] = useState({});
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccess, showError } = useToast();

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      showError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    showSuccess('Your message has been sent successfully! We\'ll get back to you within 24-48 hours.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const currentCategoryData = faqData.find(cat => cat.category === activeCategory);
  const currentCategoryIndex = faqData.findIndex(cat => cat.category === activeCategory);

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">Find answers to common questions about orders, shipping, returns, and more.</p>
      </div>

      <div className="faq-container">
        <div className="faq-content">
          {/* Category Tabs */}
          <div className="faq-categories">
            {faqData.map((category) => (
              <button
                key={category.category}
                className={`faq-category-btn ${activeCategory === category.category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.category)}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="faq-questions">
            <h2 className="faq-category-title">{activeCategory}</h2>
            {currentCategoryData?.questions.map((item, index) => {
              const isOpen = openQuestions[`${currentCategoryIndex}-${index}`];
              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggleQuestion(currentCategoryIndex, index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`faq-icon ${isOpen ? 'rotated' : ''}`}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className={`faq-answer ${isOpen ? 'show' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="faq-contact-section">
          <div className="faq-contact-card">
            <h2 className="faq-contact-title">Still Have Questions?</h2>
            <p className="faq-contact-subtitle">Can't find what you're looking for? Send us a message and we'll get back to you.</p>
            
            <form onSubmit={handleContactSubmit} className="faq-contact-form">
              <div className="faq-form-row">
                <div className="faq-form-group">
                  <label htmlFor="name">Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="faq-form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="faq-form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                />
              </div>
              <div className="faq-form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="faq-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Links */}
        <div className="faq-quick-links">
          <h3>Related Pages</h3>
          <div className="faq-links-grid">
            <Link to="/privacy-policy" className="faq-link-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Privacy Policy</span>
            </Link>
            <Link to="/refund-policy" className="faq-link-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
              <span>Refund Policy</span>
            </Link>
            <Link to="/shipping-policy" className="faq-link-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <span>Shipping Policy</span>
            </Link>
            <Link to="/contact" className="faq-link-card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

