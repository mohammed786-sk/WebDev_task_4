import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="section section-light">
      <div className="container-wrapper">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's collaborate and create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="text-3xl min-w-fit">📧</div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-3xl min-w-fit">📱</div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 font-medium">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="text-3xl min-w-fit">📍</div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">Location</p>
                    <p className="text-gray-600">Your City, Your Country</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">Follow Me</h4>
              <div className="flex gap-4 flex-wrap">
                <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all hover:shadow-lg font-bold">
                  f
                </a>
                <a href="#" className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-all hover:shadow-lg font-bold">
                  𝕏
                </a>
                <a href="#" className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-all hover:shadow-lg font-bold">
                  in
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all hover:shadow-lg font-bold">
                  ⚡
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="form-input resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2 animate-fade-in-up">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Thanks for your message! I'll get back to you soon.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
