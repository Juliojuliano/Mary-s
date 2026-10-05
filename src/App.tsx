import foto01 from './imagens/foto01.jpeg';
import foto02 from './imagens/foto02.jpeg';
import foto03 from './imagens/foto03.jpeg';
import foto04 from './imagens/foto04.jpeg';
import logo from './imagens/logo.png';

// Links centralizados: altere aqui e a página inteira é atualizada
const LINKS = {
  instagram: 'https://www.instagram.com/marysbrinqsbc',
  facebook: 'https://www.facebook.com/marysbrinq',
  phone: 'tel:+5511980287933',
  // wa.me exige o número só com dígitos (DDI + DDD + número)
  whatsapp: 'https://wa.me/5511980287933?text=' + encodeURIComponent('Olá! Gostaria de um orçamento para minha festa.'),
  github: 'https://github.com/Juliojuliano/Mary-s'
};

const social: { name: string; url: string; icon: JSX.Element }[] = [
  {
    name: 'Insta',
    url: LINKS.instagram,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <linearGradient id="instaGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f58529" />
          <stop offset="0.5" stopColor="#dd2a7b" />
          <stop offset="1" stopColor="#8134af" />
        </linearGradient>
        <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#instaGrad)" />
        <path d="M12 7.2C9.4 7.2 7.2 9.4 7.2 12C7.2 14.6 9.4 16.8 12 16.8C14.6 16.8 16.8 14.6 16.8 12C16.8 9.4 14.6 7.2 12 7.2ZM12 14.4C10.6 14.4 9.6 13.4 9.6 12C9.6 10.6 10.6 9.6 12 9.6C13.4 9.6 14.4 10.6 14.4 12C14.4 13.4 13.4 14.4 12 14.4Z" fill="#fff" />
        <path d="M16.6 7.5H16.62" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: 'Face',
    url: LINKS.facebook,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="6" fill="#1877F2" />
        <path d="M14.75 7.5H16.75V11.015H14.75V16H11.5V11.015H10V7.5H11.5V9.05C11.5 9.05 12 8.95 12.25 8.95C12.75 8.95 14.75 8.9 14.75 8.9V7.5Z" fill="#fff" />
      </svg>
    )
  }
];

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3 .9.9-2.9-.2-.3a8.1 8.1 0 1 1 6.7 3.6Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.8c.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
  </svg>
);

const features = [
  {
    title: 'Brinquedos temáticos',
    description: 'Castelos, escorregadores e pula-pula para todas as idades.',
    icon: '🎠'
  },
  {
    title: 'Mesas e cadeiras',
    description: 'Conjunto completo para aniversários e eventos no ABC.',
    icon: '🪑'
  },
  {
    title: 'Montagem inclusa',
    description: 'Entrega e montagem rápidas para você aproveitar sem preocupação.',
    icon: '⚙️'
  }
];

function App() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <div className="brand">
          <img src={logo} className="brand-mark" alt="Mary's Brinq" />
          <div>
            <strong>Mary's Brinq</strong>
            <p>Locação no ABC</p>
          </div>
        </div>
        <div className="header-info">📍 Somente no ABC</div>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Festa completa no ABC</span>
          <h1>Brinquedos, mesas e cadeiras para o seu evento infantil</h1>
          <p>
            Materiais seguros e montados com carinho. Atendimento rápido e entrega
            no ABC para fazer da sua festa um momento inesquecível.
          </p>

          <div className="hero-actions">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="button button-primary">
              Orçamento pelo Instagram
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="button button-whatsapp">
              Chamar no WhatsApp
            </a>
            <a href={LINKS.phone} className="button button-phone">
              📞 (11) 98028-7933
            </a>
            <a href="#servicos" className="button button-secondary">
              Ver serviços
            </a>
          </div>

          <div className="info-badges">
            <span>🎉 Temas infantis</span>
            <span>🚚 Entrega no ABC</span>
            <span>🥳 Montagem inclusa</span>
          </div>

          <div className="social-links">
            {social.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                <span>{item.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <img src={logo} alt="Mary's Brinq festa infantil" />
          </div>
        </div>
      </section>

      <main>
        <section id="servicos" className="services-section">
          <div className="section-head">
            <p className="section-tag">O que fazemos</p>
            <h2>Serviços para festas no ABC</h2>
          </div>
          <div className="service-grid">
            {features.map((item) => (
              <article key={item.title}>
                <div className="service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="callout-section">
          <div className="callout-copy">
            <p className="section-tag">Festa com mais conforto</p>
            <h2>Alugue de forma simples e rápida</h2>
            <p>
              Escolha seus itens, agende a entrega e deixe o restante conosco. Tudo no ABC, com atendimento próximo e eficiente.
            </p>
          </div>
        </section>

        <section className="gallery-section">
          <div className="section-head">
            <p className="section-tag">Galeria</p>
          </div>
          <div className="gallery-grid">
            {[foto01, foto02, foto03, foto04].map((src, index) => (
              <div key={index} className="gallery-item">
                <img src={src} alt="Galeria Marys Brinq" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer-section">
        <div className="footer-brand">
          <strong>Mary's Brinq</strong>
          <p>Locação de brinquedos, mesas e cadeiras no ABC.</p>
        </div>
        <nav className="footer-links" aria-label="Links do rodapé">
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </footer>

      {/* Botão flutuante com animação de pulso */}
      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar com a Mary's Brinq no WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

export default App;
