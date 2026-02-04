## Visão geral do sistema de doceria

Software para gestão de uma doceria (loja física e/ou pedidos online), focado em **controle de produtos**, **encomendas**, **produção**, **estoque** e **relacionamento com clientes**, com possibilidade de crescer depois para vendas online completas.

## Perfis de usuário

- **Administrador / Dono**
  - Configurações gerais da doceria (dados da empresa, horários, formas de pagamento).
  - Acesso a todos os relatórios e cadastros.
- **Atendente / Vendedor**
  - Registra pedidos rápidos (balcão) e encomendas futuras.
  - Consulta status de pedidos e histórico de clientes.
- **Confeiteiro / Produção**
  - Visualiza fila de produção (o que fazer hoje, amanhã, por período).
  - Dá baixa na produção/conclusão dos pedidos.

## Funcionalidades principais (ideias gerais)

- **Cadastro de produtos**
  - Cadastro de bolos, doces, kits e combos.
  - Tamanhos e variações (ex.: bolo 1kg, 2kg, sabores diferentes).
  - Preço de venda, custo estimado e margem desejada.
  - Marcação de produtos sazonais (Páscoa, Natal, datas especiais).

- **Catálogo para atendimento**
  - Tela simples e visual para o atendente mostrar os produtos ao cliente (tablet/celular).
  - Filtro por categoria (bolos, tortas, doces finos, lembrancinhas, etc.).
  - Fotos e descrições rápidas (sabores, recheios, observações como “contém lactose”).

- **Gestão de pedidos e encomendas**
  - Registro de pedidos de balcão (retirada imediata).
  - Registro de encomendas com:
    - Data e horário de retirada/entrega.
    - Tipo de evento (aniversário, casamento, chá de bebê, corporativo, etc.).
    - Observações (tema do bolo, texto personalizado na decoração).
  - Status do pedido (em aberto, em produção, pronto, entregue, cancelado).
  - Geração de “comprovante” ou resumo do pedido para enviar por WhatsApp ou e-mail.

- **Agenda da doceria**
  - Visão em calendário dos pedidos/encomendas por dia.
  - Destaque para horários críticos (ex.: muitos pedidos no mesmo período).
  - Filtro por tipo de evento e por status.

- **Fila de produção**
  - Opção de marcar como “feito” e atualizar automaticamente o status dos pedidos.

- **Financeiro básico**
  - Registro de formas de pagamento (dinheiro, cartão, Pix, etc.).
  - Visão simples de faturamento diário, semanal e mensal.
  - Relatório de pedidos por forma de pagamento e por canal (loja física, WhatsApp, Instagram, iFood, etc.).

- **Cadastro e histórico de clientes (CRM simples)**
  - Dados básicos (nome, telefone/WhatsApp).
  - Base para campanhas futuras (ex.: lembrete de aniversário, promoções sazonais).


- **Integrações futuras (ideias)**
  - Integração com WhatsApp Business (enviar resumo de pedido, confirmação).
  - Integração com redes sociais (link do catálogo).
  - Integração com plataformas de delivery (iFood, Rappi, etc.).

## Ideias para MVP (primeira versão)

Focar em um conjunto pequeno, mas bem feito, de funcionalidades:

- **MVP sugerido**
  - Cadastro de produtos com fotos, preços e categorias.
  - Cadastro de clientes básico.
  - Registro de pedidos e encomendas com:
    - Data e horário.
    - Status simples (em aberto, pronto, entregue).
  - Agenda de pedidos (lista por dia e calendário simples).
  - Relatório básico de vendas por dia.

- **Critérios de sucesso do MVP**
  - Dono e atendentes conseguem registrar 100% das encomendas no sistema (sem papel).
  - Conseguem visualizar, em segundos, o que precisa ser produzido no dia.
  - Conseguem saber o total vendido em um dia específico.

## Funcionalidades para fases futuras

- **Gestão de estoque mais detalhada**
  - Fórmulas de consumo por receita.
  - Sugestão automática de compras.

- **Fluxo financeiro mais completo**
  - Contas a pagar/receber.
  - Fechamento de caixa diário.

- **Portal do cliente / pedidos online**
  - Cliente escolhe produtos, data e horário, envia pedido direto.
  - Acompanhamento de status do pedido pelo cliente.

- **Campanhas e marketing**
  - Envio automatizado de mensagens de aniversário.
  - Ofertas em datas comemorativas com base no histórico.

## Ideias de telas (mobile/web)

- **Tela inicial (dashboard simples)**
  - Resumo do dia: pedidos do dia, em produção, prontos e entregues.
  - Atalhos: novo pedido, agenda, catálogo.

- **Tela de catálogo**
  - Lista de produtos com foto, nome, preço e botão “adicionar ao pedido”.
  - Filtros por categoria.

- **Tela de novo pedido/encomenda**
  - Seleção de cliente (ou cadastro rápido).
  - Seleção de produtos, quantidades e observações.
  - forma de pagamento e status inicial.

- **Tela de produção**
  - Lista das tarefas do dia, agrupadas por produto.
  - Botão para marcar itens como concluídos.

## Considerações técnicas iniciais (ideias)

- **Aplicativo híbrido/mobile primeiro** usando o stack atual (Ionic + Angular).
- Armazenamento inicial:
  - Começar com backend simples (ex.: Node/Express com banco relacional ou PostSQL).
  - Ou, em fase de prototipagem, usar um backend em nuvem (ex.: Firebase) para acelerar.
- Foco em **UX simples para atendimento rápido**: poucas etapas para registrar um pedido.

---

Este documento é um rascunho de ideias para orientar o planejamento.  
A partir dele, pode-se definir requisitos mais detalhados, priorizar o MVP e desenhar os fluxos de tela no Ionic.

