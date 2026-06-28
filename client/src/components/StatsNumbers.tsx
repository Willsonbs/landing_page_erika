import { Users, Award, Star, Shield } from 'lucide-react';

const stats = [
  { icon: Users,  value: '+50',   label: 'Pacientes Atendidos' },
  { icon: Award,  value: '5+',    label: 'Anos de Experiência' },
  { icon: Star,   value: '5.0',   label: 'Avaliação no Google' },
  { icon: Shield, value: '100%',  label: 'Sigilo Garantido' },
];

export default function StatsNumbers() {
  return (
    <div style={{ background: '#f0fdf4' }}>
      <div className="container py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'white', boxShadow: '0 4px 16px rgba(45,106,79,0.1)' }}
              >
                <Icon size={26} style={{ color: '#2d6a4f' }} />
              </div>
              <p
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: '#1b4332' }}
              >
                {value}
              </p>
              <p className="text-sm font-medium" style={{ color: '#52796f' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
