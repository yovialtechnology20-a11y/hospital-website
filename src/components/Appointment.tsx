import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Building2, Stethoscope, Monitor, Info, Check, MessageCircle } from 'lucide-react';
import { doctors, departments } from '../data';

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM',
];

export const Appointment = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    consultationType: 'hospital',
    symptoms: '',
  });
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const departmentDoctors = doctors.filter(d => d.department === formData.department);
  const isOnlineRecommended = formData.symptoms.length < 50;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'symptoms' && value.length > 10) {
      setShowRecommendation(true);
    }
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Book Appointment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Schedule Your Visit Today
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Book an appointment with our expert doctors. Choose between online consultation or hospital visit based on your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Appointment Booked!</h3>
                  <p className="text-gray-600 mb-6">
                    We will contact you shortly to confirm your appointment.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        patientName: '', phone: '', email: '', department: '',
                        doctor: '', date: '', time: '', consultationType: 'hospital', symptoms: ''
                      });
                    }}
                    className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Patient Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="patientName"
                          value={formData.patientName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter phone number"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Department & Doctor */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none appearance-none cursor-pointer"
                          required
                        >
                          <option value="">Select Department</option>
                          {departments.map(dept => (
                            <option key={dept.id} value={dept.name}>{dept.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Doctor</label>
                      <div className="relative">
                        <Stethoscope className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none appearance-none cursor-pointer"
                          required
                          disabled={!formData.department}
                        >
                          <option value="">Select Doctor</option>
                          {departmentDoctors.map(doc => (
                            <option key={doc.id} value={doc.name}>{doc.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none appearance-none cursor-pointer"
                          required
                        >
                          <option value="">Select Time</option>
                          {timeSlots.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Consultation Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Consultation Type</label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, consultationType: 'online' }))}
                        className={`p-4 rounded-xl border-2 flex items-center justify-center gap-3 transition-all ${
                          formData.consultationType === 'online'
                            ? 'border-primary-500 bg-primary-50 text-primary-600'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <Monitor className="w-6 h-6" />
                        <div className="text-left">
                          <p className="font-semibold">Online Consultation</p>
                          <p className="text-xs opacity-70">Video call with doctor</p>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, consultationType: 'hospital' }))}
                        className={`p-4 rounded-xl border-2 flex items-center justify-center gap-3 transition-all ${
                          formData.consultationType === 'hospital'
                            ? 'border-primary-500 bg-primary-50 text-primary-600'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        <Building2 className="w-6 h-6" />
                        <div className="text-left">
                          <p className="font-semibold">Hospital Visit</p>
                          <p className="text-xs opacity-70">In-person consultation</p>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Symptoms */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Symptoms</label>
                    <textarea
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleInputChange}
                      placeholder="Please describe your symptoms or reason for visit..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none"
                    />

                    {/* Smart Recommendation */}
                    {showRecommendation && (
                      <div className={`mt-3 p-4 rounded-xl flex items-start gap-3 ${
                        isOnlineRecommended
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-orange-50 border border-orange-200'
                      }`}>
                        <Info className={`w-5 h-5 mt-0.5 ${isOnlineRecommended ? 'text-green-600' : 'text-orange-600'}`} />
                        <div>
                          <p className={`font-medium text-sm ${isOnlineRecommended ? 'text-green-700' : 'text-orange-700'}`}>
                            {isOnlineRecommended ? 'Online Consultation Recommended' : 'Hospital Visit Recommended'}
                          </p>
                          <p className={`text-xs ${isOnlineRecommended ? 'text-green-600' : 'text-orange-600'}`}>
                            {isOnlineRecommended
                              ? 'Based on your symptoms, an online consultation may be suitable.'
                              : 'Based on your description, we recommend an in-person consultation.'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Booking...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        <span>Book Appointment</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contact */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
              <div className="space-y-4">
                <a
                  href="tel:+911800123456"
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm opacity-80">1800-123-456</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/918000123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/10 rounded-xl text-white hover:bg-white/20 transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm opacity-80">Quick Response</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Working Hours</h3>
              <div className="space-y-3 text-white">
                <div className="flex justify-between">
                  <span className="opacity-80">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Saturday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Sunday</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="pt-3 border-t border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Emergency</span>
                    <span className="px-3 py-1 bg-red-500 rounded-full text-sm">24/7 Open</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Why Book Online?</h3>
              <div className="space-y-3">
                {[
                  'Skip the waiting queue',
                  'Choose your preferred doctor',
                  'Get confirmation instantly',
                  'Reschedule anytime',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="opacity-90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
