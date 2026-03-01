export default function Home() {
  return (
    <main>
      {/* Hero */}
      <header className="hero" id="inicio">
        <h1 className="hero__title">Aurimar e Fernanda</h1>
        <div className="hero__divider">
          <span className="hero__line" />
          <span className="hero__dot" />
          <span className="hero__line" />
        </div>
        <p className="hero__date">8.8.2026</p>
        <p className="hero__place">Eco Espaço Eventos, Santa Isabel - SP</p>
        <div className="hero__image-wrap">
          <img
            src="/export/aac.png"
            srcSet="/export/aac.png 1x, /export/aac@2x.png 2x"
            alt=""
            className="hero__img"
          />
        </div>
      </header>

      {/* Boas-vindas + História - duas colunas no desktop */}
      <section className="section">
        <div className="two-columns">
          <div>
            <p className="section__body">
              Bem-vindos ao nosso cantinho! O grande dia está chegando e
              queremos dividir com vocês um pouco da nossa alegria. Aqui vocês
              encontram todas as informações sobre a cerimônia, festa e viagem,
              além de um pouquinho da nossa história.
            </p>
            <div className="image-block">
              <img src="/export/aak.png" srcSet="/export/aak.png 1x, /export/aak@2x.png 2x" alt="" />
            </div>
          </div>
          <div>
            <p className="section__body">
              Em 2015, o destino nos apresentou em uma festa em São Carlos.
              Desde então, dividimos sonhos, viagens, risadas e o amor que só
              cresceu — junto com o Toddy, nosso companheiro de quatro patas.
              Dez anos depois, seguimos lado a lado, prontos para viver o nosso
              &quot;sim&quot;.
            </p>
            <div className="image-block">
              <img src="/export/aah.png" srcSet="/export/aah.png 1x, /export/aah@2x.png 2x" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* INFORMAÇÕES - fundo verde */}
      <section className="section info-section" id="informacoes">
        <h2 className="section__title">INFORMAÇÕES</h2>
        <div className="section__divider">
          <span className="section__line" />
          <span className="section__dot" />
          <span className="section__line" />
        </div>
        <nav className="info-links" aria-label="Informações do casamento">
          <a href="#como-chegar">Como chegar</a>
          <a href="#confirme">Confirme a sua presença</a>
          <a href="#lista-presentes">Lista de presentes</a>
          <a href="#madrinhas-padrinhos">Madrinhas e Padrinhos</a>
        </nav>
        <div className="cards-grid cards-grid--icons">
          <a id="como-chegar" href="#como-chegar" className="card card--outline card--icon">
            <img src="/export/aba.png" srcSet="/export/aba.png 1x, /export/aba@2x.png 2x" alt="" className="card__icon" />
            <span className="card__title">Como chegar</span>
          </a>
          <a id="confirme" href="#confirme" className="card card--outline card--icon">
            <img src="/export/abb.png" srcSet="/export/abb.png 1x, /export/abb@2x.png 2x" alt="" className="card__icon" />
            <span className="card__title">Confirme a sua presença</span>
          </a>
          <a id="lista-presentes" href="#lista-presentes" className="card card--outline card--icon">
            <img src="/export/abc.png" srcSet="/export/abc.png 1x, /export/abc@2x.png 2x" alt="" className="card__icon" />
            <span className="card__title">Lista de presentes</span>
          </a>
          <a id="madrinhas-padrinhos" href="#madrinhas-padrinhos" className="card card--outline card--icon">
            <img src="/export/abd.png" srcSet="/export/abd.png 1x, /export/abd@2x.png 2x" alt="" className="card__icon" />
            <span className="card__title">Madrinhas e Padrinhos</span>
          </a>
        </div>
      </section>

      {/* Hospedagem */}
      <section className="section" id="hospedagem">
        <h2 className="section__title">Hospedagem</h2>
        <div className="section__divider">
          <span className="section__line" />
          <span className="section__dot" />
          <span className="section__line" />
        </div>
        <p className="section__body">
          O nosso casamento será em um local cercado pela natureza, um pouquinho
          afastado da cidade. Há várias opções de casas para aluguel na região,
          além de hotéis próximos, principalmente em Arujá. Para facilitar,
          vamos organizar um translado do hotel até o local da cerimônia/festa,
          assim todo mundo pode curtir sem preocupações! E, se preferir ir de
          carro, o espaço conta com um amplo estacionamento. Caso opte pelo
          hotel, abaixo você encontra os hotéis que terão o translado:
        </p>
        <ul className="venue-list">
          <li className="venue-list__item">
            <span className="venue-list__name">Ibis Hotel Arujá</span>
            <span className="venue-list__address">
              R. São José, 888 - Jardim Rincao, Arujá - SP, 07400-405
            </span>
          </li>
        </ul>
      </section>

      {/* Salão de beleza */}
      <section className="section" id="salao">
        <h2 className="section__title">Salão de beleza</h2>
        <div className="section__divider">
          <span className="section__line" />
          <span className="section__dot" />
          <span className="section__line" />
        </div>
        <p className="section__body">
          Para quem quiser se arrumar pertinho do local do casamento, deixamos
          abaixo algumas sugestões de salões de beleza e profissionais da
          região. Assim fica mais fácil se preparar com conforto e sem pressa!
        </p>
        <ul className="venue-list">
          <li className="venue-list__item">
            <span className="venue-list__name">Studio Jandy Parladori</span>
            <span className="venue-list__address">
              R. Minas Gerais, 205 - Jardim Planalto, Arujá - SP
            </span>
          </li>
          <li className="venue-list__item">
            <span className="venue-list__name">Stúdio Marcia Maria Arujá</span>
            <span className="venue-list__address">
              Rod. Alberto Hinoto, 1510 - Vila Pedroso, Arujá - SP
            </span>
          </li>
          <li className="venue-list__item">
            <span className="venue-list__name">Tais Santos Concept</span>
            <span className="venue-list__address">
              Av. Benedito Manoel dos Santos, 1111c - Jardim Fazenda Rincao,
              Arujá - SP
            </span>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__image-wrap">
          <img src="/export/acb.png" srcSet="/export/acb.png 1x, /export/acb@2x.png 2x" alt="" className="footer__img" />
        </div>
        <p className="footer__text">
          Somos imensamente gratos por ter você conosco nessa celebração tão
          importante. Sua presença torna esse dia ainda mais especial!
          <br />
          <br />
          Caso tenha alguma dúvida, entre em contato:
        </p>
        <p className="footer__place">Eco Espaço Eventos, Santa Isabel - SP</p>
        <div className="footer__divider">
          <span className="footer__line" />
          <span className="footer__dot" />
          <span className="footer__line" />
        </div>
      </footer>
    </main>
  );
}
