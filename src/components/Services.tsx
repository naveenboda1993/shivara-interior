import { ChefHat, Sofa, Bed, Home, Lightbulb, Paintbrush, Building2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: ChefHat,
      title: 'Modular Kitchens',
      description: 'Tailored kitchen solutions optimized for workflow and storage — premium hardware, durable finishes, and smart layouts.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Sofa,
      title: 'Living Room & Dining',
      description: 'Bespoke furniture, lighting design, and layout planning to create inviting spaces for relaxation and entertaining.',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Bed,
      title: 'Bedroom & Wardrobe Design',
      description: 'Space-efficient wardrobes, soft finishes, and mood-focused lighting for restful, clutter-free bedrooms.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Home,
      title: 'Full Home Renovation',
      description: 'Structural planning, MEP coordination, and total interiors delivery — we handle permits, contractors, and final styling.',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Lightbulb,
      title: 'False Ceilings & Lighting',
      description: 'Custom false ceilings, cove lighting, feature panels, and layered lighting design for depth and ambiance.',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Paintbrush,
      title: 'Painting & Wall Finishes',
      description: 'Textured plasters, premium paints, accent walls, and feature panels that elevate interiors.',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Building2,
      title: 'Office & Retail Interiors',
      description: 'Functional, brand-aligned commercial spaces that balance aesthetics and productivity.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-2">
            Our Services
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            End-to-End Interior Solutions
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer end-to-end interior services — design, procurement, fabrication, and installation.
            Below are our flagship offerings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg">
                  <service.icon className="text-amber-900" size={24} />
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 bg-amber-900 text-white px-8 py-4 rounded-lg hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl"
          >
            <span className="font-medium">Get a Project Estimate</span>
          </a>
        </div>
      </div>
    </section>
  );
}
