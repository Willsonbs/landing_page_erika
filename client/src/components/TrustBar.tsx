export default function TrustBar() {
  const institutions = [
    'UNIT – Univ. Tiradentes',
    'UNIFESP',
    'Univ. São Judas Tadeu',
    'Inst. Ricardo Galhardoni',
    'CTC – Dr. Thiago Castro',
  ];

  return (
    <div
      className="py-6 border-y"
      style={{ background: '#1b4332', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 flex-wrap justify-center">
          <p className="text-sm font-semibold whitespace-nowrap" style={{ color: '#74c69d' }}>
            Formação reconhecida em:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {institutions.map((inst, i) => (
              <span key={inst} className="flex items-center gap-3">
                <span
                  className="text-sm font-semibold tracking-wide whitespace-nowrap"
                  style={{ color: 'rgba(255,255,255,0.80)' }}
                >
                  {inst}
                </span>
                {i < institutions.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
