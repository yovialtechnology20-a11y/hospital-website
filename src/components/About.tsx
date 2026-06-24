import { Target, Eye, Heart, Shield, Award, Trophy, Plus, Smartphone, Building2, Clock } from 'lucide-react';
import { timelineEvents } from '../data';

const iconMap: Record<string, React.ElementType> = {
  'building-2': Building2,
  'award': Award,
  'heart': Heart,
  'trophy': Trophy,
  'plus': Plus,
  'smartphone': Smartphone,
};

const values = [
  { icon: Target, title: 'Our Mission', description: 'To provide accessible, affordable, and quality healthcare services to all sections of society with compassion and dedication.' },
  { icon: Eye, title: 'Our Vision', description: 'To be the most trusted healthcare provider in the region, setting benchmarks in medical excellence and patient care.' },
  { icon: Heart, title: 'Compassion', description: 'We treat every patient with empathy, dignity, and respect, ensuring their comfort throughout their healthcare journey.' },
  { icon: Shield, title: 'Integrity', description: 'We uphold the highest ethical standards, maintaining transparency and honesty in all our interactions.' },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Why Patients Trust <span className="text-gradient">MediCare Plus</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
            With over 15 years of excellence in healthcare, we have earned the trust of thousands through compassionate care, medical expertise, and advanced technology.
          </p>
        </div>

        {/* Hospital Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2634028/pexels-photo-2634028.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="MediCare Plus Hospital"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">15+</p>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              MediCare Plus Multi-Speciality Hospital
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Established in 2009, MediCare Plus Multi-Speciality Hospital has grown to become one of the most trusted healthcare institutions in the region. Our state-of-the-art facility spans over 300,000 square feet and houses 300 beds, advanced medical equipment, and a team of over 100 highly qualified doctors.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are committed to delivering exceptional healthcare services through our patient-centric approach, cutting-edge technology, and a team of dedicated medical professionals. Our NABH accreditation reflects our adherence to the highest standards of quality and safety.
            </p>

            {/* Hospital Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-4 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <value.icon className="w-8 h-8 text-primary-500 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Journey of Excellence</h3>

          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-accent-500 to-secondary-500 rounded-full hidden lg:block" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => {
              const Icon = iconMap[event.icon] || Award;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`relative flex items-center gap-8 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div
                      className={`inline-block p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all ${
                        isLeft ? 'lg:ml-auto' : 'lg:mr-auto'
                      }`}
                    >
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-2">
                        {event.year}
                      </span>
                      <p className="text-gray-700">{event.event}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="hidden lg:flex z-10 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
