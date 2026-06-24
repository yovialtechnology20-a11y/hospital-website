import { useEffect, useState, useRef } from 'react';
import { Users, Stethoscope, Building2, Award } from 'lucide-react';
import { stats } from '../data';

const iconMap: Record<string, React.ElementType> = {
  'users': Users,
  'stethoscope': Stethoscope,
  'building-2': Building2,
  'award': Award,
};

const StatItem = ({ stat }: { stat: typeof stats[0] }) => {
  const parseNumber = (str: string) => {
    const num = str.replace(/[^0-9]/g, '');
    return parseInt(num) || 0;
  };

  const number = parseNumber(stat.number);
  const suffix = stat.number.replace(/[0-9,]/g, '');
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * number));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, number]);

  const Icon = iconMap[stat.icon] || Users;

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{stat.label}</div>
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
