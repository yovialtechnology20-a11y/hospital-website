import { Check, ArrowRight, Sparkles, Heart, Shield, Star } from 'lucide-react';
import { healthPackages } from '../data';

export const HealthPackages = () => {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Health Checkup Packages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
            Preventive <span className="text-gradient">Health Packages</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Regular health checkups can help identify potential health issues early. Choose from our comprehensive health packages.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {healthPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="relative"
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full text-sm flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden hover:-translate-y-2 transition-all ${
                  pkg.popular ? 'border-2 border-primary-500' : 'border border-gray-100'
                }`}
              >
                {/* Header */}
                <div className={`p-6 ${pkg.popular ? 'bg-gradient-to-br from-primary-500 to-accent-500' : 'bg-gradient-to-br from-gray-100 to-white'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {index === 0 && <Shield className={`w-8 h-8 ${pkg.popular ? 'text-white' : 'text-gray-600'}`} />}
                    {index === 1 && <Heart className={`w-8 h-8 ${pkg.popular ? 'text-white' : 'text-primary-500'}`} />}
                    {index === 2 && <Sparkles className={`w-8 h-8 ${pkg.popular ? 'text-white' : 'text-gray-600'}`} />}
                    <h3 className={`text-xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                      {pkg.name}
                    </h3>
                  </div>
                  <p className={`text-sm mb-4 ${pkg.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    {pkg.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                      Rs. {pkg.price.toLocaleString()}
                    </span>
                    <span className={`text-lg line-through ${pkg.popular ? 'text-white/60' : 'text-gray-400'}`}>
                      Rs. {pkg.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${pkg.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    Save Rs. {(pkg.originalPrice - pkg.price).toLocaleString()}
                  </p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Package Includes:</h4>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#appointment"
                    className={`block w-full py-3 text-center font-semibold rounded-xl transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Book Now
                    <ArrowRight className="inline-block w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <p className="text-gray-600 mb-2">Need a customized health package?</p>
            <a href="tel:+911800123456" className="text-primary-600 font-semibold hover:underline">
              Call us: 1800-123-456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
