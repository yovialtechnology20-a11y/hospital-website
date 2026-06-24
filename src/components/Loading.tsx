import { Heart } from 'lucide-react';

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
          <Heart className="w-10 h-10 text-white" fill="currentColor" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          MediCare Plus
        </h2>
        <div className="w-48 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-4 animate-pulse" />
      </div>
    </div>
  );
};
