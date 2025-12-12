import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles size={18} className="text-amber-600" />
              <span className="text-sm font-medium text-gray-700">Premium Interior Design</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Shivara Interior Company
            </h1>

            <p className="text-2xl sm:text-3xl text-amber-900 font-light">
              Transforming Spaces with Elegance & Precision
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              We design thoughtful, luxury interiors that reflect your lifestyle. From concept to completion,
              Shivara delivers tailored solutions, premium materials, and punctual execution for homes and
              offices across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center space-x-2 bg-amber-900 text-white px-8 py-4 rounded-lg hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl group"
              >
                <span className="font-medium">Request a Free Design Consultation</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center space-x-2 bg-white text-amber-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-amber-900"
              >
                <span className="font-medium">View Portfolio</span>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury interior design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-amber-200 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-orange-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
