# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades dos usuários e dos processos administrativos e operacionais de um hotel que devem ser atendidas pelo projeto Sistema de Gestão Hoteleira.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado Golden Horizon – Sistema de Gestão Hoteleira. Ele será composto por seis componentes (módulos), contendo os elementos necessários para a reserva de quartos e espaços para eventos, bem como para a gestão de hospedagens e de clientes.

### 3.2.2 Missão do produto
Gerenciar informações relativas aos hóspedes e às suas hospedagens, à oferta de quartos e espaços para eventos, bem como às reservas de hospedagens para usuários cadastrados, com o objetivo de facilitar o atendimento ao cliente, tornando o processo remoto e digital. 

### 3.2.3 Limites do produto
O Sistema de Gestão Hoteleira não contempla funcionalidades relacionadas à atualização do software a longo prazo, à gestão financeira ou ao processamento da folha de pagamento dos colaboradores. Além disso, o sistema não oferece suporte à administração simultânea de múltiplas unidades hoteleiras.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1 | Facilidade nos gerenciamentos de dados | Essencial |
|2 | Facilidade na reserva de hospedagem | Essencial | 
|3 | Segurança no cadastro de usuários | Essencial | 
|4 | Melhoria na agilidade do atendimento ao cliente | Essencial | 

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) | Descrição |
|--------|---------------------|-----------|
| RF01   | GERENCIAR RESERVAS  | Permitir inclusão, alteração, exclusão e consulta de reservas, levando em consideração regras definidas pelo hotel como prazo mínimo e multas. O sistema deve exibir a disponibilidade de quartos em tempo real e evitar conflitos de reserva. |
| RF02   | GERENCIAR HÓSPEDES  | Cadastrar, editar, excluir e consultar dados dos hóspedes. O sistema deve armazenar preferências e histórico e permitir atualização pelo portal do hóspede. |
| RF03   | GERENCIAR PAGAMENTOS | Controlar pagamentos, recibos e status financeiro. Deve permitir diferentes formas de pagamento e geração de comprovantes. |
| RF04   | GERENCIAR ACOMODAÇÕES | Atualizar o status das acomodações (disponível, ocupado, manutenção) e permitir sua consulta. Deve permitir atribuição e liberação automática com base no check-in/check-out. |
| RF05   | GERENCIAR RELATÓRIOS | Permitir a geração de relatórios de desempenho do hotel, como taxa de ocupação, diária média, receita por tipo de quarto (RevPAR) e avaliação dos hóspedes. Exibir dados gerenciais em tempo real no painel do gerente. |
| RF06   | GERENCIAR SERVIÇOS ADICIONAIS | Permitir o cadastro e controle de serviços extras (ex: café da manhã, spa, traslado) com cobrança automática junto à fatura da reserva. |
| RF07   | AVALIAR ESTADIA | Permitir que hóspedes avaliem as acomodações e serviços após o check-out com notas e comentários. |
| RF08   | ENVIAR COMUNICAÇÕES | Enviar e-mails automáticos para confirmar reservas, cancelamentos, check-ins, check-outs e lembretes. |
| RF09   | GERENCIAR ENTRADA E SAÍDA | Atualizar o status das reservas com base no início e fim da estadia do hóspede e permitir ao hóspede realizar o check-in ou check-out online. |
| RF10   | IMPLEMENTAR PERFIS DE USUÁRIO | O sistema deve permitir diferentes níveis de acesso: administrador, gerente, recepcionista e hóspede, cada um com permissões e painéis específicos. |
| RF11   | GERENCIAR PACOTES E PROMOÇÕES | Permitir a criação, edição, exclusão e consulta de pacotes especiais e promoções com descontos, períodos válidos e condições específicas de reserva. |
| RF12   | GERENCIAR SERVIÇOS DO HOTEL | Exibir e gerenciar todos os serviços oferecidos pelo hotel, como lavanderia, academia e sala de eventos, junto com seus valores e condições, permitindo ativação ou desativação conforme disponibilidade. |
| RF13   | APRESENTAR INFORMAÇÕES SOBRE O HOTEL | Apresentar uma seção com informações institucionais e úteis do hotel, como localização, história, horários de check-in/out e políticas gerais. |
| RF14   | EXIBIR GALERIA DE FOTOS | Exibir imagens do hotel, quartos, áreas comuns, eventos e serviços em uma galeria visualmente atrativa e organizada por categorias. |
| RF15   | APRESENTAR GASTRONOMIA | Mostrar os restaurantes disponíveis no hotel, horários de funcionamento e cardápio com descrição de pratos e preços. |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) |
|--------------------|------------------------------------|
| RNF1   | O sistema deverá executar em qualquer navegador para dispositivos móveis ou desktop. |
| RNF2   | O produto deve restringir o acesso por meio de senhas individuais para o usuário. |
| RNF3   | O sistema deve ser capaz de processar até 100 reservas simultâneas sem queda de desempenho. |
| RNF4   | A interface do usuário deve ser intuitiva e acessível, permitindo que o cliente realize uma reserva em no máximo 5 cliques. |
| RNF5   | O sistema deve ter uma disponibilidade mínima de 99,5% mensal. |
| RNF6   | O sistema deve permitir o aumento de capacidade (usuários e dados) sem necessidade de reescrever o código. |
| RNF7   | O site deve funcionar corretamente nos principais navegadores (Chrome, Firefox, Edge, Safari). |
| RNF8   | O código-fonte do sistema deve seguir boas práticas de desenvolvimento, com comentários e documentação para facilitar futuras manutenções. |
| RNF9   | Todas as ações do administrador (edições de hóspedes, alterações de reservas, etc.) devem ser registradas em logs acessíveis apenas por usuários autorizados. |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Administrador | Usuário com acesso total ao sistema, responsável pela gestão completa das hospedagens, hóspedes, eventos e quartos. Pode visualizar relatórios, cadastrar ou editar informações do hotel e gerenciar outros usuários do sistema interno. |
| Recepcionista | Usuário responsável pelo registro de hóspedes, check-in/check-out, atualização de reservas e suporte aos hóspedes no sistema. Pode acessar dados de contato dos hóspedes, visualizar e alterar status das hospedagens e conferir disponibilidade dos quartos. |
| Cliente (Hóspede) | Usuário final que acessa o site para visualizar informações sobre o hotel, quartos, eventos e contato. Pode realizar cadastro/login, agendar hospedagens e acompanhar o status da reserva. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, a recepcionista poderá gerenciar os dados de hóspedes no sistema, enquanto o administrador, além dessas funções, poderá gerenciar os quartos e eventos. E os clientes terão acesso ao cadastro e solicitação de hospedagem.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![image](https://github.com/user-attachments/assets/3188df8e-1e29-4656-8ef3-201a7a92eb4c)
 
### 3.4.2 Descrições de Casos de Uso

## Caso de Uso: Gerenciar Reservas
**Código:** RF01  
**Atores:** Recepcionista, Hóspede  
**Descrição:** Permite criar, alterar, excluir e consultar reservas, verificando disponibilidade de quartos em tempo real e aplicando regras do hotel como prazo mínimo e multas.

### Fluxo Principal:
1. Ator acessa o módulo de reservas.  
2. Seleciona datas e tipo de quarto.  
3. Sistema exibe disponibilidade.  
4. Ator preenche os dados da reserva.  
5. Sistema valida regras e confirma a operação.

---

## Caso de Uso: Gerenciar Hóspedes
**Código:** RF02  
**Atores:** Recepcionista, Hóspede  
**Descrição:** Permite cadastrar, editar, excluir e consultar dados dos hóspedes, incluindo histórico e preferências.

### Fluxo Principal:
1. Ator acessa cadastro de hóspedes.  
2. Insere ou edita dados pessoais.  
3. Sistema salva ou atualiza o registro.

---

## Caso de Uso: Gerenciar Pagamentos
**Código:** RF03  
**Atores:** Recepcionista, Hóspede  
**Descrição:** Controla pagamentos e recibos, permitindo várias formas de pagamento e geração de comprovantes.

### Fluxo Principal:
1. Ator acessa detalhes da reserva.  
2. Seleciona forma de pagamento.  
3. Sistema registra e gera comprovante.

---

## Caso de Uso: Gerenciar Acomodações
**Código:** RF04  
**Atores:** Recepcionista, Sistema  
**Descrição:** Atualiza status das acomodações com base em eventos e permite consulta.

### Fluxo Principal:
1. Sistema atualiza status automaticamente.  
2. Ator pode consultar ou alterar manualmente.

---

## Caso de Uso: Gerar Relatórios
**Código:** RF05  
**Atores:** Gerente  
**Descrição:** Permite gerar relatórios gerenciais com dados em tempo real.

### Fluxo Principal:
1. Gerente seleciona tipo e período.  
2. Sistema gera relatório com gráficos e indicadores.

---

## Caso de Uso: Gerenciar Serviços Adicionais
**Código:** RF06  
**Atores:** Recepcionista, Hóspede  
**Descrição:** Permite adicionar serviços extras à fatura da reserva.

### Fluxo Principal:
1. Ator seleciona serviços adicionais.  
2. Sistema inclui serviços e atualiza cobrança.

---

## Caso de Uso: Avaliar Estadia
**Código:** RF07  
**Atores:** Hóspede  
**Descrição:** Permite ao hóspede avaliar a experiência após o check-out.

### Fluxo Principal:
1. Sistema envia link de avaliação.  
2. Hóspede preenche notas e comenta.

---

## Caso de Uso: Enviar Comunicações
**Código:** RF08  
**Atores:** Sistema  
**Descrição:** Envia e-mails automáticos relacionados à estadia.

### Fluxo Principal:
1. Sistema identifica evento (reserva, check-in, etc).  
2. Dispara comunicação correspondente.

---

## Caso de Uso: Gerenciar Entrada e Saída
**Código:** RF09  
**Atores:** Hóspede, Sistema  
**Descrição:** Permite realizar check-in e check-out online.

### Fluxo Principal:
1. Hóspede acessa portal.  
2. Sistema valida dados e atualiza status.

---

## Caso de Uso: Implementar Perfis de Usuário
**Código:** RF10  
**Atores:** Administrador  
**Descrição:** Define níveis de acesso e permissões conforme o perfil.

### Fluxo Principal:
1. Administrador cadastra usuário.  
2. Seleciona perfil e define permissões.

---

## Caso de Uso: Gerenciar Pacotes e Promoções
**Código:** RF11  
**Atores:** Gerente  
**Descrição:** Permite criar e controlar promoções e pacotes especiais.

### Fluxo Principal:
1. Gerente define detalhes do pacote.  
2. Sistema armazena e disponibiliza para reserva.

---

## Caso de Uso: Gerenciar Serviços do Hotel
**Código:** RF12  
**Atores:** Gerente  
**Descrição:** Controla serviços gerais como lavanderia e academia.

### Fluxo Principal:
1. Gerente acessa lista de serviços.  
2. Altera disponibilidade e valores.

---

## Caso de Uso: Apresentar Informações sobre o Hotel
**Código:** RF13  
**Atores:** Visitantes, Hóspedes  
**Descrição:** Exibe informações institucionais do hotel.

### Fluxo Principal:
1. Usuário acessa seção "Sobre o Hotel".  
2. Sistema exibe conteúdo institucional.

---

## Caso de Uso: Exibir Galeria de Fotos
**Código:** RF14  
**Atores:** Visitantes, Hóspedes  
**Descrição:** Exibe imagens organizadas por categorias.

### Fluxo Principal:
1. Usuário acessa galeria.  
2. Sistema exibe imagens por categoria.

---

## Caso de Uso: Apresentar Gastronomia
**Código:** RF15  
**Atores:** Hóspedes, Visitantes  
**Descrição:** Exibe restaurantes e cardápios do hotel.

### Fluxo Principal:
1. Usuário acessa a seção de gastronomia.  
2. Sistema mostra restaurantes, horários e cardápio com preços.


### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. O diagrama de classes do sistema Golden Horizon contém identificação do hóspede e informações da acomodação, além de estar vinculada ao pagamento correspondente. Cada serviço adicional pode ser associado à reserva, assim como as avaliações feitas pelos hóspedes. O administrador é responsável pela geração dos relatórios gerenciais, enquanto o usuário do tipo funcionário pode atuar nas operações do sistema conforme o seu nível de permissão. 

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://uploaddeimagens.com.br/images/004/890/476/original/WhatsApp_Image_2025-04-07_at_18.33.31.jpeg?1744070282)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1 | Usuário | Classe base para todos os perfis do sistema, contendo dados como nome e e-mail. |
| 2 | Hóspede | Representa o cliente do hotel, com CPF, preferências e histórico de reservas. |
| 3 | Funcionário | Usuário que trabalha no hotel, podendo exercer funções operacionais. |
| 4 | Administrador | Funcionário com permissões administrativas e acesso a relatórios gerenciais. |
| 5 | Acomodação | Cadastro dos quartos do hotel, contendo número, tipo e status de ocupação. |
| 6 | Reserva | Registra a estadia do hóspede, incluindo datas, valor total e status. |
| 7 | Pagamento | Controla os pagamentos realizados, com forma, valor e status financeiro. |
| 8 | Serviço | Cadastro de serviços adicionais oferecidos, como café da manhã e spa. |
| 9 | Avaliação | Registro das avaliações feitas pelos hóspedes após a estadia. |
| 10 | Relatório | Geração de relatórios administrativos, como taxa de ocupação e receita média. |
