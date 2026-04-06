export function Sobre() {
  return (
    <section className="py-20 md:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "100+", label: "Clientes atendidos" },
              { number: "10+", label: "Modelos disponíveis" },
              { number: "100%", label: "Elétrico e sustentável" },
              { number: "5★", label: "Avaliação dos clientes" },
            ].map(({ number, label }) => (
              <div
                key={label}
                className="bg-background border border-border rounded-sm p-6 flex flex-col gap-1 hover:border-primary/50 transition-colors duration-300"
              >
                <span className="text-3xl md:text-4xl font-black text-primary leading-none">{number}</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
              Sobre a Moto X
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight text-balance mb-6">
              A concessionária elétrica do Rio de Janeiro
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground font-bold">Moto X</strong> é uma concessionária especializada em motocicletas, bikes e scooters elétricas, nascida no Rio de Janeiro com o propósito de transformar a mobilidade urbana da cidade.
              </p>
              <p>
                Trabalhamos com os melhores modelos do mercado, oferecendo uma experiência de compra sem burocracia e com todo o suporte que você merece: garantia, manutenção especializada, acessórios e atendimento próximo do início ao fim.
              </p>
              <p>
                Se você quer se mover pela cidade com mais praticidade, economia e consciência ambiental, a Moto X é o lugar certo.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" aria-hidden="true" />
              <span className="text-primary font-black text-sm uppercase tracking-widest whitespace-nowrap">
                Mobilidade sem burocracia
              </span>
              <div className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
