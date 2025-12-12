import { MapPin, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Modern Family Home',
      location: 'Hyderabad',
      description: 'Complete interiors with an open-plan living area, walnut modular kitchen, and built-in storage solutions.',
      scope: 'Design → Execution → Furnishing',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Compact Urban Apartment',
      location: 'Bengaluru',
      description: 'Space-maximizing solutions: custom wardrobes, multifunctional living furniture, and warm lighting scheme.',
      scope: 'Renovation & styling',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Luxury Villa',
      location: 'Telangana',
      description: 'High-end finishes, dramatic false ceilings, and a designer kitchen with island and smart storage.',
      scope: 'End-to-end interiors',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Retail Flagship',
      location: 'Chennai',
      description: 'Brand-focused retail fit-out with custom shelving, feature walls, and customer flow optimization.',
      scope: 'Commercial fit-out',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-2">
            Portfolio
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Recent Work
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our latest projects showcasing our commitment to excellence and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin size={16} />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
                <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                <p className="text-white/90 mb-3">{project.description}</p>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {project.scope}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 text-amber-900 font-semibold text-lg hover:text-amber-700 transition-colors group">
            <span>View Full Gallery</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
