# Giro — landing page

Landing institucional do **Giro by ESPtech**. Este projeto é só a página de apresentação — o painel de produto fica em outro repositório (`Frontend-v2`).

![Preview](docs/preview-inicio.png)

## Rodar localmente

```bash
npm install
npm run dev
```

## Stack

- React 19 + Vite
- Tailwind CSS v4 (tema em `src/index.css`)

## Estrutura

```
src/
  App.jsx       dados de exemplo do herói
  Landing.jsx   seções da landing
  ui.jsx        marca, ícones e tokens visuais
  index.css     tema Tailwind
public/brand/   SVGs da marca
```

Os botões de contato abrem uma conversa no WhatsApp da ESPtech. O número fica em `WHATSAPP_URL`, no topo de `src/Landing.jsx`.
