"use client";

import { useState } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";

interface Presente {
  nome: string;
  imagem: string;
  valor: number;
}

const presentes: Presente[] = [
  {
    nome: "Café da manhã na cama",
    imagem: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&q=80",
    valor: 100,
  },
  {
    nome: "Noite da pizza do casal",
    imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&q=80",
    valor: 100,
  },
  {
    nome: "Maratona de filmes e pipoca",
    imagem: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop&q=80",
    valor: 120,
  },
  {
    nome: "Petiscos e cerveja artesanal",
    imagem: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=300&fit=crop&q=80",
    valor: 120,
  },
  {
    nome: "Dia de spa e relaxamento",
    imagem: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop&q=80",
    valor: 150,
  },
  {
    nome: "Tanque cheio para a lua de mel",
    imagem: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop&q=80",
    valor: 150,
  },
  {
    nome: "Churrasco de domingo",
    imagem: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop&q=80",
    valor: 200,
  },
  {
    nome: "Aula de dança a dois",
    imagem: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=300&fit=crop&q=80",
    valor: 200,
  },
  {
    nome: "Jantar romântico a dois",
    imagem: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&q=80",
    valor: 250,
  },
  {
    nome: "Noite de vinhos e queijos",
    imagem: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop&q=80",
    valor: 300,
  },
  {
    nome: "Passeio de barco",
    imagem: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=300&fit=crop&q=80",
    valor: 400,
  },
  {
    nome: "Experiência gastronômica",
    imagem: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=300&fit=crop&q=80",
    valor: 500,
  },
  {
    nome: "Diária em hotel",
    imagem: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop&q=80",
    valor: 700,
  },
  {
    nome: "Fim de semana na praia",
    imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&q=80",
    valor: 1200,
  },
  {
    nome: "Lua de mel dos sonhos",
    imagem: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&q=80",
    valor: 2000,
  },
];

/* ── PIX BR Code Estático — conforme Manual BCB v2.9.0 ─────── */
/* Estrutura EMV-QRCPS (Merchant Presented Mode)               */
/* Polinômio CRC16: 0x1021 — Valor inicial: 0xFFFF             */
/* GUI: br.gov.bcb.pix — Chave formato DICT                    */

function crc16(str: string): string {
  let crc = 0xffff;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) crc = ((crc << 1) ^ 0x1021) & 0xffff;
      else crc = (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function tlv(id: string, value: string): string {
  return id + value.length.toString().padStart(2, "0") + value;
}

function gerarPixPayload(
  chave: string,
  nome: string,
  cidade: string,
  valor: number
): string {
  // ID 26 — Merchant Account Information
  //   00: GUI (br.gov.bcb.pix) — Mandatório
  //   01: chave Pix — Mandatório (formato DICT)
  const merchantAccount = tlv(
    "26",
    tlv("00", "br.gov.bcb.pix") + tlv("01", chave)
  );

  // ID 62 — Additional Data Field Template
  //   05: txid (Reference Label) — "***" quando não informado
  const additionalData = tlv("62", tlv("05", "***"));

  // Montagem do payload conforme exemplo BCB (seção 2.6.3)
  let payload =
    tlv("00", "01") +               // Payload Format Indicator
    merchantAccount +                // Merchant Account Information (ID 26)
    tlv("52", "0000") +             // Merchant Category Code
    tlv("53", "986") +              // Transaction Currency (BRL)
    tlv("54", valor.toFixed(2)) +   // Transaction Amount
    tlv("58", "BR") +               // Country Code
    tlv("59", nome.substring(0, 25)) +  // Merchant Name (max 25)
    tlv("60", cidade.substring(0, 15)) + // Merchant City (max 15)
    additionalData;                  // Additional Data Field (txid)

  // ID 63 — CRC16 (inclui "6304" no cálculo antes de computar)
  payload += "6304";
  payload += crc16(payload);
  return payload;
}

// Chave PIX — telefone no formato internacional DICT (+55 + DDD + número)
const PIX_CHAVE = "+5586981230201";
const PIX_NOME = "AurimareFernanda";
const PIX_CIDADE = "SaoPaulo";

export default function ListaPresentes() {
  const [selecionado, setSelecionado] = useState<number | null>(null);
  const [modal, setModal] = useState<Presente | null>(null);
  const [valorInput, setValorInput] = useState<string>("0");
  const [copiado, setCopiado] = useState(false);

  return (
    <>
      <div className="presentes-grid">
        {presentes.map((p, i) => {
          const ativo = selecionado === i;
          return (
            <button
              key={i}
              className={`presente-card${ativo ? " presente-card--ativo" : ""}`}
              onClick={() => setSelecionado(ativo ? null : i)}
            >
              <div className="presente-card__img-wrap">
                <Image
                  src={p.imagem}
                  alt={p.nome}
                  width={400}
                  height={300}
                  className="presente-card__img"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <span className="presente-card__nome">{p.nome}</span>
              <span className="presente-card__valor">
                R$ {p.valor.toLocaleString("pt-BR")}
              </span>
              <span
                className={`presente-card__btn${ativo ? " presente-card__btn--visivel" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (ativo) {
                    setValorInput(String(p.valor));
                    setModal(p);
                  }
                }}
              >
                Presentear
              </span>
            </button>
          );
        })}
      </div>

      {/* Modal PIX */}
      {modal && (
        <div className="pix-overlay" onClick={() => setModal(null)}>
          <div className="pix-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="pix-modal__fechar"
              onClick={() => setModal(null)}
            >
              &times;
            </button>
            <p className="pix-modal__titulo">{modal.nome}</p>
            <div className="pix-modal__valor-wrap">
              <span className="pix-modal__cifrao">R$</span>
              <input
                type="text"
                inputMode="numeric"
                className="pix-modal__valor-input"
                value={valorInput}
                onChange={(e) => {
                  const raw = e.target.value.replace(/[^0-9.,]/g, "");
                  setValorInput(raw);
                }}
              />
            </div>
            <p className="pix-modal__valor-hint">
              Você pode alterar o valor acima
            </p>
            {(() => {
              const v = parseFloat(valorInput.replace(",", "."));
              const payload =
                !isNaN(v) && v > 0
                  ? gerarPixPayload(PIX_CHAVE, PIX_NOME, PIX_CIDADE, v)
                  : "";

              return (
                <>
                  <div className="pix-modal__qr">
                    {payload ? (
                      <QRCodeSVG value={payload} size={200} level="M" />
                    ) : (
                      <p className="pix-modal__instrucao">
                        Informe um valor acima para gerar o QR Code
                      </p>
                    )}
                  </div>
                  {payload && (
                    <>
                      <p className="pix-modal__instrucao">
                        Aponte a câmera do seu banco para o QR Code ou copie o código abaixo
                      </p>
                      <div className="pix-modal__copia">
                        <p className="pix-modal__payload">{payload}</p>
                        <button
                          className="pix-modal__copiar"
                          onClick={() => {
                            navigator.clipboard.writeText(payload);
                            setCopiado(true);
                            setTimeout(() => setCopiado(false), 2000);
                          }}
                        >
                          {copiado ? "Copiado!" : "Copiar"}
                        </button>
                      </div>
                    </>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}
