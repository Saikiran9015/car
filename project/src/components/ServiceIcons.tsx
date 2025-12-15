import { Car, Sparkles, Home } from 'lucide-react';

interface ServiceIconsProps {
  onServiceClick: (service: string) => void;
}

const services = [
  {
    id: 'car-service',
    name: 'Car Service',
    icon: Car,
    color: 'blue',
    bgGradient: 'from-blue-500 to-blue-600',
  },
  {
    id: 'car-cleaning',
    name: 'Car Cleaning Products',
    icon: Sparkles,
    color: 'green',
    bgGradient: 'from-green-500 to-green-600',
  },
  {
    id: 'house-cleaning',
    name: 'House Cleaning Products',
    icon: Home,
    color: 'orange',
    bgGradient: 'from-orange-500 to-orange-600',
  },
];

export default function ServiceIcons({ onServiceClick }: ServiceIconsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <div
            key={service.id}
            onClick={() => onServiceClick(service.id)}
            className="group cursor-pointer"
          >
            <div className={`bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}>
              <div className="flex flex-col items-center text-white">
                <div className="bg-white/20 p-6 rounded-full mb-4 group-hover:bg-white/30 transition">
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-center">{service.name}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
