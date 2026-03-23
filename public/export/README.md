# Imagens do site (export)

Coloque aqui as imagens PNG exportadas junto com os HTML da pasta `EXPORT`.

**Arquivos esperados (nomes do layout Web_1920):**

| Arquivo | Uso |
|---------|-----|
| `aac.png` ou `aac@2x.png` | Banner do topo (hero) — se existirem os dois, o script de otimização prefere `@2x` |
| `aak.png` ou `aak@2x.png` | Foto “Boas-vindas” |
| `aah.png` ou `aah@2x.png` | Foto “Nossa história” |
| `aba.png` … `abd.png` | Ícones (Como chegar, presença, presentes, padrinhos) |
| `acb.png` ou `acb@2x.png` | Imagem do rodapé |

Se as imagens estiverem na pasta `EXPORT/` na raiz do projeto:

```bash
npm run copy-images
```

Depois, **atualize dimensões e caminhos** no manifest (obrigatório para o `<Image />` do Next.js bater com os arquivos reais):

```bash
npm run sync-images
```

Isso lê cada PNG em `public/export/` e grava `lib/export-image-sizes.json` com `src`, `width` e `height`.

**Opcional** — gerar WebPs leves e manifest apontando para `.webp`:

```bash
npm run optimize-images
```

Ordem sugerida: `copy-images` → `sync-images` (PNG) **ou** `optimize-images` (WebP).
