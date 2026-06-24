import { Shield, Building, Umbrella, Heart, Activity } from 'lucide-react';
import { insuranceProviders } from '../data';

const iconMap: Record<string, React.ElementType> = {
  'star': Shield,
  'shield': Shield,
  'building': Building,
  'umbrella': Umbrella,
  'heart': Heart,
  'activity': Activity,
};

export const Insurance = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Insurance Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Insurance & <span className="text-gradient">Cashless Facilities</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
            We accept all major insurance providers and offer cashless treatment facilities for hassle-free healthcare experience.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: '500+ Insurance Partners',
              description: 'We have partnerships with over 500+ insurance companies for seamless coverage.',
            },
            {
              icon: Activity,
              title: 'Cashless Treatment',
              description: 'Get treated without paying upfront. We handle all insurance paperwork.',
            },
            {
              icon: Building,
              title: 'Corporate Tie-Ups',
              description: 'Special packages and schemes for corporate employees and their families.',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="h-full p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Insurance Providers */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">Supported Insurance Providers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {insuranceProviders.map((provider) => {
              const Icon = iconMap[provider.logo] || Shield;
              return (
                <div
                  key={provider.name}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">{provider.name}</span>
                </div>
              );
            })}
          </div>

          <p className="text-center text-gray-600 mt-8">
            ...and many more. Contact our insurance desk for details about your specific insurance provider.
          </p>
        </div>
      </div>
    </section>
  );
};
