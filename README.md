# Site de Casamento - Aurimar e Fernanda

Site estático com renderização no servidor (SSR) em Next.js, baseado nos layouts da pasta `EXPORT` (web e mobile).

## Conteúdo

- Hero com data (08.08.2026) e local (Eco Espaço Eventos, Santa Isabel - SP)
- Boas-vindas e história do casal
- Seção de informações (Como chegar, Confirme presença, Lista de presentes, Madrinhas e Padrinhos)
- Hospedagem (Ibis Hotel Arujá)
- Salões de beleza (Studio Jandy Parladori, Stúdio Marcia Maria, Tais Santos Concept)
- Rodapé com agradecimento

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy na Vercel

### Opção 1: Pelo site (recomendado)

1. **Crie uma conta** em [vercel.com](https://vercel.com) (pode usar GitHub, GitLab ou e-mail).

2. **Envie o projeto para um repositório Git** (GitHub, GitLab ou Bitbucket), se ainda não tiver:
   ```bash
   git init
   git add .
   git commit -m "Site casamento"
   git remote add origin https://github.com/SEU_USUARIO/site-casamento.git
   git push -u origin main
   ```

3. No painel da Vercel, clique em **Add New** → **Project**.

4. **Importe o repositório** do seu Git. A Vercel detecta Next.js automaticamente.

5. Confirme as configurações (podem ficar em branco; o padrão já funciona):
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** (deixe padrão)
   - **Install Command:** `npm install`

6. Clique em **Deploy**. Em alguns minutos o site estará no ar com um link tipo `seu-projeto.vercel.app`.

7. (Opcional) Em **Settings** → **Domains** você pode adicionar um domínio próprio.

**Se aparecer 404 NOT_FOUND após o deploy:** em **Settings** → **General** → **Build & Development Settings** confira:
- **Framework Preset:** deve ser **Next.js** (não "Other").
- **Output Directory:** deixe em branco (o padrão do Next.js é `.next`).
- **Root Directory:** deixe em branco se o projeto está na raiz do repositório.
Depois faça um novo deploy (Deployments → ⋮ no último deploy → Redeploy).

### Opção 2: Pela CLI

1. Instale a Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Na pasta do projeto, rode:
   ```bash
   vercel
   ```

3. Siga as perguntas (login, nome do projeto, etc.). Na primeira vez pode pedir para linkar à sua conta.

4. Para publicar em produção:
   ```bash
   vercel --prod
   ```

O site ficará disponível em um endereço como `site-casamento-xxx.vercel.app`.

## Imagens

Todas as imagens do site vêm de **`public/export/`** (veja `public/export/README.md` para nomes dos arquivos).

1. Copie os PNGs para `public/export/` ou rode `npm run copy-images` (a partir de `export/` ou `EXPORT/` na raiz).
2. Gere/atualize o manifest com dimensões reais a partir dos PNGs:
   ```bash
   npm run sync-images
   ```
3. **Opcional** — WebP + trim de bordas + JSON apontando para `.webp`:
   ```bash
   npm run optimize-images
   ```

## Estrutura

- `app/layout.tsx` — layout raiz e fontes Google (Whisper para o título, Cinzel para o restante)
- `app/page.tsx` — página principal com `next/image` e dimensões de `lib/export-image-sizes.json`
- `app/globals.css` — estilos responsivos (artboards mobile / Web_1229 / Web_1920)
- `lib/export-image-sizes.json` — `src`, `width` e `height` por asset (atualizado por `sync-images` ou `optimize-images`)
- `scripts/sync-export-image-sizes.mjs` — lê PNGs em `public/export/` e grava o JSON
- `scripts/optimize-export-images.mjs` — trim, bordas claras → branco, WebP e regeneração do JSON
