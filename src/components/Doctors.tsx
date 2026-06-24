import { Star, MapPin, ArrowRight, Phone, Calendar } from 'lucide-react';
import { doctors } from '../data';
import { useState } from 'react';

export const Doctors = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const departments = ['All', ...Array.from(new Set(doctors.map(d => d.department)))];
  const filteredDoctors = selectedDepartment === 'All'
    ? doctors
    : doctors.filter(d => d.department === selectedDepartment);

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Our Specialists
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Meet Our <span className="text-gradient">Expert Doctors</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Our team of highly qualified and experienced doctors are dedicated to providing the best medical care with compassion and expertise.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                selectedDepartment === dept
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 hover:-translate-y-2 transition-all"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-gray-900">{doctor.rating}</span>
                </div>

                {/* Overlay Buttons */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                  <a
                    href="#appointment"
                    className="flex-1 py-2 bg-white text-primary-600 font-medium rounded-lg flex items-center justify-center gap-1 text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Book
                  </a>
                  <a
                    href={`tel:+91${doctor.id}`}
                    className="p-2 bg-white text-primary-600 rounded-lg"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-sm text-gray-600">{doctor.qualification}</p>
                  </div>
                </div>

                <p className="text-primary-600 font-medium text-sm mb-3">{doctor.specialty}</p>

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{doctor.department}</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Consultation Fee</p>
                    <p className="text-lg font-bold text-primary-600">Rs. {doctor.fee}</p>
                  </div>
                  <p className="text-sm text-gray-500">{doctor.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
          >
            View All Doctors
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
