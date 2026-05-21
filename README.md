# LaunchKit

Ferramenta para gerar campanhas, roteiros, carrosséis, prompts e assets de crescimento orgânico para divulgar apps próprios.

[Demo ativa](https://launch-kit-omega.vercel.app)

## Por que esse projeto existe

Construir um app é só metade do caminho. Depois que o produto existe, ainda é preciso explicar o que ele resolve, gerar conteúdo, testar mensagens e encontrar usuários.

O LaunchKit nasceu para apoiar esse processo: transformar um produto em ideias de campanha, roteiros curtos, carrosséis, prompts visuais e um pacote de publicação manual.

## Relação com o TemAi

O TemAi é meu produto principal. O LaunchKit funciona como uma camada de crescimento para ele e para outros apps do portfólio.

Em vez de depender apenas de posts improvisados, o LaunchKit ajuda a criar:

- hooks para redes sociais;
- roteiros para Reels, TikTok e Shorts;
- carrosséis com estrutura de problema, demo, prova e CTA;
- prompts para gerar imagens no ChatGPT;
- checklist de publicação e variações A/B.

## Funcionalidades

- Cadastro local de produtos e proposta de valor.
- Geração de campanhas por canal, formato, objetivo e estilo.
- Biblioteca de ideias com status de produção.
- Editor de carrossel com slides personalizáveis.
- Prompt Studio para imagens e direção criativa.
- Importação manual de assets gerados fora do app.
- Exportação de cards em PNG no navegador.
- Hub de publicação assistida com copy, hashtags e atalhos para plataformas.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Canvas API para exportação visual
- LocalStorage para dados do MVP

## Arquitetura

```txt
src/
  app/
    page.tsx
    launchkit/
      page.tsx
      launchkit-app.tsx
```

O MVP concentra a experiência principal em `launchkit-app.tsx`, com estado local para produtos, biblioteca, campanhas, slides e assets.

## Fluxo de uso

1. Escolha ou cadastre um produto.
2. Defina canal, formato, objetivo, estilo e duração.
3. Gere roteiro, legenda, hashtags, checklist e variações.
4. Edite carrossel e prompts visuais.
5. Gere ou importe assets.
6. Exporte cards e publique manualmente.

## Decisões técnicas

- O projeto evita prometer postagem automática, porque APIs sociais exigem permissões e regras específicas.
- O MVP foca em fluxo manual assistido: gerar conteúdo, copiar textos, exportar assets e abrir plataformas.
- A exportação em PNG acontece no navegador, sem backend.
- Os dados ficam em LocalStorage para reduzir fricção e manter o MVP simples.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Aprendizados

- Produto bom também precisa de distribuição.
- Ferramentas internas podem acelerar validação de ideias.
- O mesmo raciocínio de produto usado no app deve aparecer na divulgação.
- Criar conteúdo com processo reduz improviso e aumenta consistência.

## Próximos passos

- Melhorar README com prints reais da interface.
- Criar presets específicos para TemAi, SplitMate e Sabore.
- Adicionar exportação de pacotes em Markdown/ZIP.
- Evoluir biblioteca de campanhas com métricas manuais.
- Explorar persistência com Supabase quando fizer sentido.
