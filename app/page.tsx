import Image from "next/image";
import images from "@/lib/export-image-sizes.json";

export default function Home() {
  const hero = images.aac;
  const colLeft = images.aak;
  const colRight = images.aah;

  return (
    <main>
      {/* Hero */}
      <header className="hero" id="inicio">
        <div className="hero__text">
          <h1 className="hero__title">Aurimar e Fernanda</h1>
          <div className="hero__divider">
            <span className="hero__line" />
            <span className="hero__dot" />
            <span className="hero__line" />
          </div>
          <p className="hero__date">8.8.2026 - 15:00</p>
          <p className="hero__place">Eco Espaço Eventos, Santa Isabel - SP</p>
        </div>
        <div className="hero__image-wrap">
          <Image
            src={hero.src}
            alt=""
            width={hero.width}
            height={hero.height}
            className="hero__img"
            sizes="100vw"
            quality={100}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </header>

      {/* Boas-vindas + História — Desktop: foto-esq/texto-dir, texto-esq/foto-dir */}
      <section className="section">
        <div className="two-columns">
          {/* Linha 1: Foto esquerda + Texto direita */}
          <div className="two-columns__row">
            <div className="image-block two-columns__figure">
              <Image
                src={colLeft.src}
                alt=""
                width={colLeft.width}
                height={colLeft.height}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <p className="section__body two-columns__text">
              Bem-vindos ao nosso cantinho! O grande dia está chegando e
              queremos dividir com vocês um pouco da nossa alegria. Aqui vocês
              encontram todas as informações sobre a cerimônia, festa e viagem,
              além de um pouquinho da nossa história.
            </p>
          </div>
          {/* Linha 2: Texto esquerda + Foto direita (no mobile: foto primeiro) */}
          <div className="two-columns__row two-columns__row--reverse">
            <div className="image-block two-columns__figure">
              <Image
                src={colRight.src}
                alt=""
                width={colRight.width}
                height={colRight.height}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <p className="section__body two-columns__text">
              Em 2015, o destino nos apresentou em uma festa em São Carlos.
              Desde então, dividimos sonhos, viagens, risadas e o amor que só
              cresceu — junto com o Toddy, nosso companheiro de quatro patas.
              Dez anos depois, seguimos lado a lado, prontos para viver o nosso
              &quot;sim&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO — fundo verde full-bleed */}
      <section className="localizacao-section" id="localizacao">
        <div className="localizacao-section__inner">
          <h2 className="section__title">LOCALIZAÇÃO</h2>
          <div className="section__divider section__divider--on-accent">
            <span className="section__line" />
            <span className="section__dot" />
            <span className="section__line" />
          </div>
          <p className="localizacao-address">
            Eco Espaço Eventos — Estr. do Ouro Fino, Km 13 s/n, Santa Isabel - SP, 07500-000
          </p>
          <div className="localizacao-map">
            <iframe
              src="https://maps.google.com/maps?q=Eco+Espa%C3%A7o+Eventos+Estr.+do+Ouro+Fino+Km+13+Santa+Isabel+SP+07500-000&output=embed&iwloc=&z=15"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Eco Espaço Eventos"
            />
          </div>
        </div>
        {/* Floral border — full-width, two images side by side to avoid upscale loss */}
        <div className="localizacao-below-map">
          <Image
            src={images.aap.src}
            alt=""
            width={images.aap.width}
            height={images.aap.height}
            sizes="(max-width: 900px) 100vw, 50vw"
            className="localizacao-img--primary"
            style={{ width: "50%", height: "100%", objectFit: "cover", objectPosition: "bottom", display: "block", flexShrink: 0 }}
          />
          <Image
            src={images.aap.src}
            alt=""
            width={images.aap.width}
            height={images.aap.height}
            sizes="50vw"
            className="localizacao-img--secondary"
            style={{ width: "50%", height: "100%", objectFit: "cover", objectPosition: "bottom", display: "block", flexShrink: 0 }}
          />
        </div>
      </section>

      {/* Hospedagem */}
      <section className="section" id="hospedagem">
        <div className="hospedagem-deco">
          <Image
            src={images.aae.src}
            alt=""
            width={images.aae.width}
            height={images.aae.height}
            sizes="150px"
            style={{ width: "80%", height: "auto", display: "block" }}
          />
        </div>
        <div className="hospedagem-content">
          <h2 className="section__title">Hospedagem</h2>
          <div className="section__divider">
            <span className="section__line" />
            <span className="section__dot" />
            <span className="section__line" />
          </div>
          <p className="section__body">
            O nosso casamento será em um local cercado pela natureza, um pouquinho
            afastado da cidade. Há várias opções de casas para aluguel na região,
            além de hotéis próximos, principalmente em Arujá. Se preferir ir de
            carro, o espaço conta com um amplo estacionamento. Caso opte pelo
            hotel, abaixo você encontra os hotéis recomendados próximos ao local:
          </p>
          <ul className="venue-list">
            <li className="venue-list__item">
              <span className="venue-list__name">Ibis Hotel Arujá</span>
              <span className="venue-list__address">
                R. São José, 888 - Jardim Rincao, Arujá - SP, 07400-405
              </span>
            </li>
            <li className="venue-list__item">
              <span className="venue-list__name">Bristol Villaggio Rosa Arujá</span>
              <span className="venue-list__address">
                Av. Airton dos Santos Heras Galves, Galvéz, 333 - Jardim Aruja, Arujá - SP, 07407-040
              </span>
            </li>
          </ul>
        </div>
        <div className="hospedagem-spacer" />
      </section>

      {/* CONVIDADOS */}
      <section className="section" id="convidados">
        <div className="convidados-spacer" />
        <div className="convidados-content">
          <h2 className="section__title">CONVIDADOS</h2>
          <div className="section__divider">
            <span className="section__line" />
            <span className="section__dot" />
            <span className="section__line" />
          </div>
          <p className="section__body">
            Pedimos, com carinho, que leiam as orientações a seguir — elas vão
            ajudar a garantir o conforto, a organização e a harmonia da celebração.
          </p>
          <div className="convidados-info">
            <div className="convidados-item">
              <p className="convidados-item__title">Confirme sua presença</p>
              <p className="convidados-item__sub">
                Você receberá o link da confirmação de presença pelo número de seu celular
              </p>
            </div>
            <div className="convidados-item">
              <p className="convidados-item__title">Traje esporte fino</p>
              <p className="convidados-item__sub">*Não usar branco</p>
            </div>
            <div className="convidados-item">
              <p className="convidados-item__title">
                O local da cerimônia será o mesmo da festa
              </p>
            </div>
            <div className="convidados-item">
              <p className="convidados-item__title">
                O espaço possui trechos de grama
              </p>
              <p className="convidados-item__sub">Evite saltos finos para maior conforto</p>
            </div>
            <div className="convidados-item">
              <p className="convidados-item__title">
                Informações sobre vans:
              </p>
              <p className="convidados-item__sub">Em breve</p>
            </div>
          </div>
        </div>
        <div className="convidados-deco">
          <Image
            src={images.abt.src}
            alt=""
            width={images.abt.width}
            height={images.abt.height}
            sizes="150px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </section>

      {/* PRESENTE */}
      <section className="section" id="presente">
        <div className="presente-content">
          <h2 className="section__title">LISTA DE PRESENTES</h2>
          <div className="section__divider">
            <span className="section__line" />
            <span className="section__dot" />
            <span className="section__line" />
          </div>
          <p className="section__body">Em breve</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer__text">
          Somos imensamente gratos por ter você conosco nessa celebração tão importante.
          <br />
          Sua presença torna esse dia ainda mais especial!
          <br />
          <br />
          Caso tenha alguma dúvida, entre em contato!
        </p>
        <div className="footer__divider" />
      </footer>
    </main>
  );
}
