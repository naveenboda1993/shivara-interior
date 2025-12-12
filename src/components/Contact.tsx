import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    preferredTime: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
      preferredTime: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-2">
            Contact Us
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to transform your space? Book a free consultation or send us your project details.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h4>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-amber-900" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Phone</p>
                  <a href="tel:+919876543210" className="text-gray-600 hover:text-amber-900 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-amber-900" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Email</p>
                  <a href="mailto:info@shivarainteriors.com" className="text-gray-600 hover:text-amber-900 transition-colors">
                    info@shivarainteriors.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-amber-900" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Address</p>
                  <p className="text-gray-600">
                    Office 12, Design Hub<br />
                    City, State, India
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              <span className="font-medium">Chat with us on WhatsApp</span>
            </a>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Office location"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h4>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select type</option>
                      <option value="modular-kitchen">Modular Kitchen</option>
                      <option value="full-home">Full Home Renovation</option>
                      <option value="bedroom">Bedroom & Wardrobe</option>
                      <option value="living-room">Living Room & Dining</option>
                      <option value="commercial">Office & Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget (Optional)
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g., 5-10 Lakhs"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Time
                  </label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    placeholder="e.g., Weekdays 10 AM - 2 PM"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-amber-900 text-white px-8 py-4 rounded-lg hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl group"
                >
                  <span className="font-medium">Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
