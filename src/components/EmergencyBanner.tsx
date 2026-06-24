import { Phone, Ambulance, AlertTriangle, ArrowRight } from 'lucide-react';

export const EmergencyBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Emergency Info */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-xl animate-pulse">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <p className="text-sm opacity-90">Emergency Helpline</p>
                  <p className="text-2xl font-bold">1800-XXX-XXXX</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-white/30" />

              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Ambulance className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <p className="text-sm opacity-90">Ambulance Service</p>
                  <p className="text-2xl font-bold">1800-XXX-XXXX</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <p className="text-white text-lg font-medium hidden sm:block">
                Need Immediate Medical Assistance?
              </p>
              <a
                href="tel:+911800123456"
                className="flex items-center gap-2 px-6 py-3 bg-white text-red-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:bg-gray-50"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
