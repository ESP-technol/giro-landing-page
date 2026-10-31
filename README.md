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

Os botões “Entrar no painel” levam à seção de contato (o painel operacional não faz parte deste repo).
