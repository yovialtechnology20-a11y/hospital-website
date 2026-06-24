import { Heart, Brain, Bone, Baby, Sparkles, User, Ribbon, Ear, Activity, Stethoscope, ArrowRight } from 'lucide-react';
import { departments } from '../data';

const iconMap: Record<string, React.ElementType> = {
  'heart': Heart,
  'brain': Brain,
  'bone': Bone,
  'baby': Baby,
  'sparkles': Sparkles,
  'user': User,
  'ribbon': Ribbon,
  'ear': Ear,
  'activity': Activity,
  'stethoscope': Stethoscope,
};

export const Departments = () => {
  return (
    <section id="departments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Medical Departments
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Comprehensive <span className="text-gradient">Medical Care</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Our multi-speciality hospital offers a wide range of medical departments equipped with advanced technology and expert specialists.
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((dept) => {
            const Icon = iconMap[dept.icon] || Activity;
            return (
              <div
                key={dept.id}
                className="group relative h-full bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10 p-6 group-hover:text-white transition-colors">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white">{dept.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-white/80">{dept.description}</p>
                  <div className="flex items-center gap-2 text-primary-600 group-hover:text-white font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Book a Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
