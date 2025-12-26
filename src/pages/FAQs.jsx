import React, { useState } from 'react';
import './FAQs.css';
import HeroVideo from '../components/HeroVideo';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSections = [
    {
      title: "About Khaddar",
      questions: [
        {
          question: "What is Khaddar?",
          answer: "Khaddar is a homegrown brand celebrating authentic Indian textiles. Our collections are inspired by different regions of India, promoting traditional craftsmanship and supporting local artisans. Each piece is thoughtfully designed to highlight the rich heritage of Indian fabrics while embracing contemporary aesthetics."
        }
      ]
    },
    {
      title: "Shipping & Delivery",
      questions: [
        {
          question: "Do you deliver all over India?",
          answer: "Yes, we currently deliver across India. International shipping is not available at the moment."
        },
        {
          question: "How long does delivery take?",
          answer: "Orders are dispatched within 5–7 working days. Delivery time may vary depending on your location."
        }
      ]
    },
    {
      title: "Cancellation & Refunds",
      questions: [
        {
          question: "Can I cancel my order?",
          answer: "Orders can be cancelled within 24 hours of placing the order, provided the item has not been shipped. Once dispatched, cancellations are not accepted."
        },
        {
          question: "Do you offer refunds?",
          answer: "We do not offer refunds except in cases where the product delivered is damaged or incorrect. Such issues must be reported within 48 hours of delivery with unboxing photos or videos. Approved refunds will be processed to the original payment method within 7–10 working days."
        }
      ]
    },
    {
      title: "Exchanges",
      questions: [
        {
          question: "Can I exchange my product?",
          answer: "Yes, exchanges are accepted within 48 hours of delivery, and only with a valid reason. The item must be unused, unwashed, unaltered, and returned with all original tags.\n\nYou may exchange for:\n• A different size\n• A defective item replacement\n• Another product of your choice (any price difference must be paid; exchanges for lower-value items will not be accepted)\n\nOnce the returned item passes quality check, the exchange will be processed."
        }
      ]
    },
    {
      title: "Payment Options & COD",
      questions: [
        {
          question: "What payment options are available?",
          answer: "We accept all major online payment methods, including credit/debit cards, UPI, and net banking."
        },
        {
          question: "Do you offer Cash on Delivery (COD)?",
          answer: "No, we currently do not offer COD. All orders must be prepaid through our secure payment gateway."
        }
      ]
    },
    {
      title: "Care Instructions",
      questions: [
        {
          question: "How should I care for my Khaddar products?",
          answer: "To ensure the longevity of your handcrafted pieces:\n\n1. Always read the care tag on your garment for specific instructions.\n2. While some items are hand or machine washable, delicate fabrics like silk require dry cleaning only.\n3. Some fabrics can be ironed normally, while others require extra care using a steam iron.\n4. For general care: use mild, natural soap, line dry in shade, and handle gently.\n\nNatural dyes and handloom fabrics last longer when cared for properly."
        }
      ]
    },
    {
      title: "Collaborations & Community",
      questions: [
        {
          question: "How can I collaborate with Khaddar or be part of the community?",
          answer: "We love connecting with fellow creators, designers, and enthusiasts! You can:\n\n• Reach out to us for collaborations, pop-ups, wholesale partnerships, or freelance projects via our official contact channels.\n• Join the Khaddar community by following us on WhatsApp broadcast channels, Instagram, and other social platforms.\n• Platforms like LinkedIn are used for job opportunities, freelance projects, and collaborative initiatives.\n• For collaborations or resale permissions, a formal written agreement with Khaddar is required.\n\nWe encourage anyone passionate about authentic Indian textiles and artisan support to connect with us!"
        }
      ]
    },
    {
      title: "How to Get in Touch",
      questions: [
        {
          question: "How can I get in touch with Khaddar?",
          answer: "You can reach us via:\n\n• Email: The official email ID listed on our website\n• WhatsApp: Message us on the number provided on the website\n• Call: Use the phone number provided on the website for direct support\n\nOur team will respond as quickly as possible to assist with queries, collaborations, or support."
        }
      ]
    },
    {
      title: "Customer Care",
      questions: [
        {
          question: "What support does Khaddar provide for customers?",
          answer: "Our customer care team is here to assist you with:\n\n• Order-related queries (status, modifications, cancellations)\n• Product issues (damages, defects, exchanges)\n• Guidance on fabric care and sizing\n• Collaboration or partnership inquiries\n\nYou can reach out via email, WhatsApp, or phone as listed on our website. We aim to respond promptly and personally to ensure a smooth and satisfying experience for every customer."
        }
      ]
    },
    {
      title: "Student Internships",
      questions: [
        {
          question: "Does Khaddar offer internships for students?",
          answer: "As a homegrown startup, we're open to having students on board for a fun and learning experience. We do not currently have a structured internship program, but if you're interested, reach out to us and we'll get back to you.\n\nWe're also happy to collaborate with fashion students:\n• You can share your designs with us\n• Khaddar may fund your creation and feature it on our platform, giving full credit to the student designer\n\nThis is a great way to learn, collaborate, and showcase your talent with an authentic artisan-driven brand."
        }
      ]
    },
    {
      title: "Sizing",
      questions: [
        {
          question: "How do I choose the right size for Khaddar products?",
          answer: "We provide a detailed size chart for all products on the website.\n\n• Please refer to the chart before placing your order to ensure the best fit.\n• Sizes are based on standard measurements, but slight variations may occur due to handcrafted and artisanal production techniques.\n• If you are unsure about sizing, you can reach out to our customer care team via email, WhatsApp, or phone for guidance before placing your order."
        }
      ]
    }
  ];

  let questionCounter = 0;

  return (
    <div className="faqs-page">
      <HeroVideo
        title='FAQS'
        subtitle='Everything you need to know about Khaddar'
        buttonText='CONTACT US'
      />

      <section className="faqs-content">
        <div className="container">
          <div className="faqs-intro">
            <div className="section-icon">✧</div>
            <span className="section-label">Frequently Asked Questions</span>
            <h2 className="faqs-main-title">How Can We Help You?</h2>
            <p className="faqs-description">
              Find answers to common questions about our products, policies, and services.
            </p>
          </div>

          <div className="faqs-sections">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="faq-section">
                <h3 className="faq-section-title">{section.title}</h3>
                <div className="faq-items">
                  {section.questions.map((item) => {
                    const currentIndex = questionCounter++;
                    return (
                      <div
                        key={currentIndex}
                        className={`faq-item ${openIndex === currentIndex ? 'active' : ''}`}
                      >
                        <button
                          className="faq-question"
                          onClick={() => toggleFAQ(currentIndex)}
                        >
                          <span className="question-text">{item.question}</span>
                          <span className="faq-icon">
                            {openIndex === currentIndex ? '−' : '+'}
                          </span>
                        </button>
                        <div className="faq-answer">
                          <div className="answer-content">
                            {item.answer.split('\n').map((line, i) => (
                              <p key={i}>{line}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="faqs-footer-cta">
            <div className="cta-icon">◆</div>
            <h3>Still Have Questions?</h3>
            <p>Our team is here to help. Reach out to us anytime.</p>
            <a href="/contact" className="faqs-contact-btn">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;

