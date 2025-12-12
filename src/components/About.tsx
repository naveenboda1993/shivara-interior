import { Award, Users, TrendingUp, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Client-first collaboration',
      description: 'Your vision drives every decision we make',
    },
    {
      icon: Award,
      title: 'Quality materials & workmanship',
      description: 'Premium materials with expert craftsmanship',
    },
    {
      icon: TrendingUp,
      title: 'Transparent pricing & timelines',
      description: 'Clear quotes with no hidden surprises',
    },
    {
      icon: Shield,
      title: 'Sustainable & practical design',
      description: 'Eco-conscious choices that last',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Interior design workspace"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-amber-100 rounded-2xl p-6 shadow-lg max-w-xs hidden sm:block">
              <p className="text-4xl font-bold text-amber-900">10+</p>
              <p className="text-gray-700 mt-1">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-2">
                About Us
              </h2>
              <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About Shivara Interior Company
              </h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Shivara Interior Company is a full-service interior design and renovation studio with over
              a decade of experience creating beautiful, functional spaces. Our team blends contemporary
              aesthetics with timeless craftsmanship — delivering personalized designs, transparent project
              management, and flawless installations.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We specialize in residential interiors, modular kitchens, bespoke storage solutions, and
              commercial fit-outs.
            </p>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Our Values:</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <value.icon className="text-amber-900" size={24} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{value.title}</h5>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 text-amber-900 font-semibold hover:text-amber-700 transition-colors"
              >
                <span>Meet Our Designers</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
