import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya R.',
      text: 'Shivara turned our vague ideas into a home we love — on time and within budget.',
      rating: 5,
    },
    {
      name: 'Amit K.',
      text: 'Excellent coordination and attention to detail. Our kitchen is both beautiful and practical.',
      rating: 5,
    },
    {
      name: 'Sunita M.',
      text: 'Professional team, clear timelines, and great finishes. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Rajesh P.',
      text: 'They understood our style and gave us furniture solutions we hadn\'t imagined.',
      rating: 5,
    },
    {
      name: 'Neha S.',
      text: 'Seamless renovation with minimal disruption. The crew were respectful and efficient.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-amber-900 uppercase tracking-wider mb-2">
            Testimonials
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Quote className="text-amber-200 mb-4" size={40} />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-current" size={20} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 text-amber-900 font-semibold hover:text-amber-700 transition-colors">
            <span>Read More Reviews</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
