## Cinthia Costa Beauty Studio - Guia rapido

> Prototipo completo em Next.js com jornada de agendamento, upsell de produtos e checkout fashion. Todo o conteudo fica centralizado em arquivos de dados para ajustes rapidos na apresentacao.

### 1. Rodar o projeto

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` para navegar pelo fluxo.

### 2. Estrutura das paginas

- `/` Landing page com resumo da jornada, servicos, depoimentos e CTA para iniciar o agendamento.
- `/agendar` Fluxo em 4 passos (servico -> horario -> pagamento -> ticket).
- `/produtos` + `/produtos/checkout` Upsell de home care com ticket de retirada ou entrega.
- `/looks` + `/looks/checkout` Loja de looks exclusivos com selecao de tamanho e ticket final.
- `/agradecimento` Pagina final com orientacoes e proximos passos.

### 3. Onde editar textos e listas

- `src/content/site-data.js`: nome da marca, textos da landing, depoimentos, FAQ, contatos.
- `src/content/booking-data.js`: servicos, horarios disponiveis, metodos de pagamento, produtos, looks e politicas da loja.
- Componentes visuais ficam em `src/components/sections` e `src/components/booking`.

### 4. Ajustar identidade visual

- Paleta e fontes base em `src/app/globals.css`.
- Imagens do hero e galeria podem ser trocadas direto no `siteData` (links Unsplash) ou por arquivos locais em `public/`.
- Para novos cards ou etapas, duplique componentes existentes e atualize os dados.

### 5. Ferramentas e scripts

- `npm run lint` valida padroes de codigo com ESLint.
- `npm run format` aplica Prettier e ordenacao de classes Tailwind.
- `.vscode/extensions.json` sugere extensoes (Tailwind IntelliSense, Headwind, Prettier, ESLint) e `.vscode/settings.json` ativa formatacao ao salvar.

### 6. Proximos passos sugeridos

1. Conectar um gateway real (Stripe, Mercado Pago) nos botoes de confirmar pagamento.
2. Integrar Google Calendar ou outro sistema para sincronizar horarios reais.
3. Subir para a Vercel e usar as paginas como demonstracao interativa na apresentacao.
