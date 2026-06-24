import { Award, Clock, Users, Heart, Search, Video, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const trustIndicators = [
  { icon: Award, label: 'NABH Certified', value: 'Quality Care' },
  { icon: Clock, label: '24/7 Emergency', value: 'Always Ready' },
  { icon: Users, label: '100+', value: 'Expert Doctors' },
  { icon: Heart, label: '50,000+', value: 'Happy Patients' },
];

const departmentOptions = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology', 'Gynecology', 'Oncology', 'ENT', 'Gastroenterology', 'General Medicine'];

export const Hero = () => {
  const [searchType, setSearchType] = useState<'doctor' | 'department' | 'treatment'>('doctor');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero-pattern opacity-95" />
        <img
          src="https://images.pexels.com/photos/2634028/pexels-photo-2634028.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Hospital Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-accent-600/85 to-secondary-600/80" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent-500/10 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
              <Award className="w-4 h-4" />
              <span>Trusted by 50,000+ Patients</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Advanced Healthcare.
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                Compassionate Care.
              </span>
            </h1>

            <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-8">
              Providing world-class medical services with experienced specialists, modern technology, and patient-centered treatment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#appointment"
                className="group px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-2xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#appointment"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <Video className="w-5 h-5" />
                Online Consultation
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator.label}
                  className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <indicator.icon className="w-6 h-6 text-yellow-300 mb-2" />
                  <span className="text-lg font-bold text-white">{indicator.label}</span>
                  <span className="text-xs text-white/70">{indicator.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Search Card */}
          <div className="hidden lg:block">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Find What You Need</h3>

              {/* Search Type Tabs */}
              <div className="flex gap-2 mb-6">
                {(['doctor', 'department', 'treatment'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSearchType(type)}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                      searchType === type
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type === 'doctor' && 'Doctor'}
                    {type === 'department' && 'Department'}
                    {type === 'treatment' && 'Treatment'}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={
                    searchType === 'doctor'
                      ? 'Search by doctor name...'
                      : searchType === 'department'
                      ? 'Select department...'
                      : 'Search treatment...'
                  }
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  list={searchType === 'department' ? 'departments' : undefined}
                />
                {searchType === 'department' && (
                  <datalist id="departments">
                    {departmentOptions.map((dept) => (
                      <option key={dept} value={dept} />
                    ))}
                  </datalist>
                )}
              </div>

              {/* Quick Links */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-3">Quick Links</p>
                <div className="flex flex-wrap gap-2">
                  {['Cardiology', 'Orthopedics', 'Pediatrics', 'Neurology'].map((dept) => (
                    <a
                      key={dept}
                      href="#departments"
                      className="px-3 py-1.5 bg-gray-100 hover:bg-primary-50 text-gray-600 hover:text-primary-600 rounded-lg text-sm transition-colors"
                    >
                      {dept}
                    </a>
                  ))}
                </div>
              </div>

              {/* Search Button */}
              <button className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all">
                <Search className="w-5 h-5" />
                Search Now
              </button>

              {/* Emergency */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Need Immediate Help?</p>
                    <p className="text-lg font-bold text-red-500">Emergency: 1800-123-456</p>
                  </div>
                  <a
                    href="tel:1800123456"
                    className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors"
                  >
                    <Clock className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
