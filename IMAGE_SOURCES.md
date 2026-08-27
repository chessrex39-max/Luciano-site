# Fontes das imagens e vídeo

## Fotos reais do cliente (Instagram @drlucianoconrado.adv)

- `luciano-avatar.jpg`: foto de perfil pública do Instagram, salva na maior resolução exposta pela API pública do Instagram (320x320px). Usada na seção "Sobre o advogado" e na seção "Método" (foto ao lado dos passos 01/02/03).
- `escritorio-fachada.jpg`: recorte da foto real da fachada do escritório (vitrine com o nome e a logo "LC" de Luciano Conrado), publicada por ele no post sobre a nova identidade visual (23/07/2026). Usada na imagem lateral do Hero. Resolução nativa confirmada nos metadados do post: 702x382px — não existe versão maior publicada por ele. No Hero, a imagem é exibida com `object-contain` sobre um fundo desfocado (mesma foto, ampliada e borrada) em vez de esticada com `object-cover`, para evitar o efeito de baixa resolução ao preencher um card maior que o tamanho nativo do arquivo.
- `ig-missao.jpg` / `ig-identidade-visual.jpg`: imagens completas de origem (a primeira contém a foto da fachada + texto da missão do escritório; a segunda é o cartão da identidade visual/logo). Mantidas como referência, não usadas diretamente na página.

Não há fotos profissionais do rosto de Luciano em resolução mais alta que a do
avatar no Instagram (o feed é majoritariamente pessoal/família, sem outro
retrato solo profissional). Por isso a página não usa nenhuma foto de rosto
apresentada como sendo dele além do avatar do Instagram (150x150 ou 320x320,
conforme disponibilidade), e nenhuma foto de banco é posicionada como se fosse
ele. Também foi verificado o Google Maps/Perfil da Empresa em busca de uma
foto alternativa da fachada em melhor resolução: o único resultado encontrado
é de um imóvel diferente do endereço atual, então não foi usado. Para a
versão final, recomenda-se solicitar ao cliente um retrato profissional e uma
foto da fachada em alta resolução.

## Banco de imagens (Pexels License, uso comercial livre, sem atribuição obrigatória)

| Arquivo | URL original | Uso |
|---|---|---|
| `videos/justica-loop.mp4` | https://www.pexels.com/video/balance-scales-and-gavel-placed-on-a-wooden-desk-5636977/ | Vídeo institucional do hero (balança e martelo) |
| `justica-loop-poster.jpg` | frame extraído do vídeo acima | Poster/fallback do vídeo |
| `atendimento-idoso.jpg` | https://www.pexels.com/photo/an-elderly-man-consulting-an-insurance-agent-8441780/ | Imagem lateral do CTA final |
| `idoso-documentos-1.jpg` | https://www.pexels.com/photo/elderly-man-in-black-suit-carrying-document-folders-7654595/ | Reserva, não utilizada (imagem do hero trocada pela foto real do escritório) |
| `idoso-documentos-2.jpg` | https://www.pexels.com/photo/elderly-man-in-black-suit-carrying-document-folders-7654593/ | Reserva, não utilizada |
| `livros-processo.jpg` | https://www.pexels.com/photo/book-and-binder-on-a-desk-7876088/ | Reserva, não utilizada (seção Método redesenhada sem imagem) |
| `balanca-laptop.jpg` | https://www.pexels.com/photo/close-up-shot-of-a-laptop-beside-a-scales-of-justice-6077665/ | Reserva, não utilizada |
| `dama-justica.jpg` | https://www.pexels.com/photo/selective-focus-photo-of-a-lady-justice-statuette-8112115/ | Reserva, não utilizada |

Vídeo original de 10s, recomprimido sem áudio em 1280x720 (~470KB) para uso
como fundo em loop. Todas as imagens tiveram metadados EXIF removidos.

Licença: https://www.pexels.com/license/

## Observação importante

Nenhuma das imagens de banco é apresentada como sendo o escritório, a equipe
ou clientes reais de Luciano Conrado. Elas ilustram, de forma genérica, temas
ligados ao Direito Previdenciário (documentos, atendimento, justiça). As duas
fotos reais usadas (avatar e fachada do escritório) vêm do próprio Instagram
público do cliente.
