# Luciano Conrado Advocacia — preview

Landing page estática desenvolvida em Next.js, React, TypeScript, Tailwind CSS e Framer Motion.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run build
```

## Segurança e publicação

- O projeto não utiliza banco de dados, API, formulário ou variável de ambiente.
- Arquivos `.env*`, `.vercel`, `.next`, `out` e `node_modules` são ignorados pelo Git.
- O preview permanece com `noindex` até a publicação oficial autorizada.
- Nunca adicione tokens, credenciais ou dados de clientes ao repositório.
- As dependências diretas estão fixadas em versões auditadas. Ao instalar, revise e envie o novo `package-lock.json` gerado antes de futuras atualizações.

O script `deploy.sh` existe como alternativa para o export estático prebuilt. Ele exige uma instalação previamente aprovada da CLI da Vercel e não baixa executáveis automaticamente durante o deploy. Antes de usá-lo, confirme que a CLI está autenticada na conta correta.
