import { ClipboardList, Palette, CheckCircle, Hammer, Key } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Consultation & Survey',
      description: 'Understand needs, measure space.',
      number: '01',
    },
    {
      icon: Palette,
      title: 'Concept Design & Quote',
      description: 'Mood boards, layouts, and a clear cost estimate.',
      number: '02',
    },
    {
      icon: CheckCircle,
      title: 'Approval & Production',
      description: 'Final drawings, material selection, and fabrication.',
      number: '03',
    },
    {
      icon: Hammer,
      title: 'Site Execution',
      description: 'Skilled installation and quality checks.',
      number: '04',
    },
    {
      icon: Key,
      title: 'Handover & Aftercare',
      description: 'Final styling, walkthrough, and post-handover support.',
      number: '05',
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-wider mb-2">
            Our Process
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold mb-6">
            Simple, Transparent, Reliable
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From initial consultation to final handover, we ensure a smooth and transparent process every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800 rounded-2xl p-6 h-full hover:bg-gray-750 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg">
                    <step.icon className="text-amber-500" size={28} />
                  </div>
                  <span className="text-4xl font-bold text-gray-700">{step.number}</span>
                </div>

                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-amber-500/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
