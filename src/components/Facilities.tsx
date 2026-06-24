import { useState } from 'react';
import { Scan, Activity, ScanLine, Monitor, Globe, Ambulance, ChevronLeft, ChevronRight } from 'lucide-react';
import { facilities } from '../data';

const iconMap: Record<string, React.ElementType> = {
  'scan': Scan,
  'activity': Activity,
  'scan-line': ScanLine,
  'monitor': Monitor,
  'globe': Globe,
  'ambulance': Ambulance,
};

export const Facilities = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = facilities.length;

  const next = () => setActiveIndex((prev) => (prev + 1) % total);
  const prev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Technology & Facilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Advanced <span className="text-gradient">Medical Infrastructure</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Our hospital is equipped with state-of-the-art medical technology and modern facilities for accurate diagnosis and effective treatment.
          </p>
        </div>

        {/* Facility Showcase */}
        <div className="relative">
          {/* Main Display */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-96">
                <img
                  src={facilities[activeIndex].image}
                  alt={facilities[activeIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-transparent lg:block hidden" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-primary-600 to-accent-600 text-white flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-4">
                  {(() => {
                    const Icon = iconMap[facilities[activeIndex].icon] || Scan;
                    return (
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    );
                  })()}
                  <span className="text-sm font-medium opacity-80">Facility {activeIndex + 1} of {total}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {facilities[activeIndex].name}
                </h3>
                <p className="text-white/90 text-lg mb-6">
                  {facilities[activeIndex].description}
                </p>
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl w-fit hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto flex-1 mx-4">
              {facilities.map((facility, index) => {
                const Icon = iconMap[facility.icon] || Scan;
                return (
                  <button
                    key={facility.id}
                    onClick={() => setActiveIndex(index)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                      index === activeIndex
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium hidden md:inline">{facility.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={next}
              className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
