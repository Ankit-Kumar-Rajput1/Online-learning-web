import React, { useState } from "react";
import "../pages/Style/FAQ.css";



function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How can I start learning?",
      answer: "Click on any course and start learning for free.",
    },
    {
      question: "Are the courses beginner-friendly?",
      answer: "Yes, all courses start from very basics.",
    },
    {
      question: "Do I get certificates?",
      answer: "Yes! After completing each course you get a certificate.",
    },
  ];

  return (
    <div className="faq-section">
      <h2 id="h1">Frequently Asked Questions</h2>

      {faqData.map((item, index) => (
        <div
          key={index}
          className="faq-item"
        >
          <div
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.question}
          </div>

          {openIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
