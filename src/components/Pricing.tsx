import { Calculator, FileText, TrendingUp } from 'lucide-react';

export default function Pricing() {
  const features = [
    {
      icon: Calculator,
      title: 'Transparent Pricing',
      description: 'Clear quotes with detailed breakdowns',
    },
    {
      icon: FileText,
      title: 'Free Consultation',
      description: 'Initial design consultation deductible from project cost',
    },
    {
      icon: TrendingUp,
      title: 'Flexible Packages',
      description: 'Modular pricing tailored to your scope',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-2">
            Pricing
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Pricing & Packages
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer modular pricing — consultations start at a fixed fee (deductible from project cost).
            Projects are priced per scope; request a complimentary estimate for a detailed quote.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <feature.icon className="text-amber-900" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-3xl p-8 md:p-12 text-white text-center">
          <h4 className="text-3xl font-bold mb-4">Ready to Get Started?</h4>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your project. Our team will provide a detailed estimate
            within 48 hours.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 bg-white text-amber-900 px-8 py-4 rounded-lg hover:bg-amber-50 transition-all font-semibold shadow-xl"
          >
            <span>Request a Free Estimate</span>
          </a>
        </div>
      </div>
    </section>
  );
}
