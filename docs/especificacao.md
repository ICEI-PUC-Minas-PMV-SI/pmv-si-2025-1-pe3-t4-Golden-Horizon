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

![dcu](https://uploaddeimagens.com.br/images/004/890/461/original/WhatsApp_Image_2025-04-07_at_19.19.38.jpeg?1744069411)
 
### 3.4.2 Descrições de Casos de Uso

#### Gerenciar Recepcionista (CSU01)

Sumário: O Recepcionista realiza a gestão (inclusão, remoção, alteração e consulta) dos dados dos hóspedes.

Ator Primário: Recepcionista.

Ator Secundário: Administrador.

Pré-condições: O Recepcionista deve estar autenticado no sistema.

Fluxo Principal:

1)  O Recepcionista requisita a manutenção de hóspedes. 
2)  O Sistema apresenta as operações disponíveis: inclusão de um novo hóspede, alteração de dados, exclusão de hóspede e consulta de informações. 
3)  O Recepcionista seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso. 
4)  Se o Recepcionista desejar continuar com a gestão de hóspedes, o caso de uso retorna ao passo 2; caso contrário, o caso de uso termina. 

Fluxo Alternativo (3): Inclusão

 3.1 - O Recepcionista requisita a inclusão de um novo hóspede. <br>
 3.2 - O Sistema apresenta um campo solicitando o CPF do hóspede a ser cadastrado. <br>
 3.3 - O Recepcionista fornece o CPF. <br>
 3.4 - O Sistema verifica se o hóspede já está cadastrado. <br>
     ↳ Se sim, o sistema informa que o hóspede já existe e retorna ao passo 2. <br>
     ↳ Se não, apresenta um formulário em branco com os campos: Nome, CPF, Telefone, E-mail, Endereço, Cidade, Estado, CEP, Data de Nascimento, Observações. <br>
 3.5 - O Recepcionista preenche os dados solicitados. <br>
 3.6 - O Sistema valida os dados inseridos. <br>
     ↳ Se os dados forem válidos, o hóspede é cadastrado e a lista de hóspedes é atualizada. <br>
     ↳ Caso contrário, o Sistema reporta o erro, solicita correções e repete a verificação. <br>

Fluxo Alternativo (3): Remoção

 3.1 - O Recepcionista seleciona um hóspede da lista. <br>
 3.2 - O Recepcionista requisita a exclusão do hóspede. <br>
 3.3 - O Sistema verifica se a exclusão é permitida (ex: sem reservas ativas). <br>
     ↳ Se sim, realiza a exclusão. <br>
     ↳ Se não, informa que o hóspede não pode ser removido. <br>

Fluxo Alternativo (3): Alteração

 3.1 - O Recepcionista seleciona um hóspede. <br>
 3.2 - O Sistema apresenta os dados cadastrados. <br>
 3.3 - O Recepcionista edita os campos desejados. <br>
 3.4 - O Sistema valida os novos dados. <br>
     ↳ Se válidos, os dados são atualizados. <br>
     ↳ Caso contrário, o Sistema reporta o erro. <br>
 
Fluxo Alternativo (3): Consulta

 3.1 - O Recepcionista opta por pesquisar um hóspede pelo nome, CPF ou outro critério. <br>
 3.2 - O Sistema apresenta uma lista com os resultados. <br>
 3.3 - O Recepcionista seleciona um hóspede. <br>
 3.4 - O Sistema exibe os dados detalhados do hóspede. <br>

Pós-condições: Um hóspede foi inserido ou removido do sistema, seus dados foram atualizados ou apresentados em tela para consulta. 

#### Realizar Cadastro (CSU02) 

Sumário: O Hóspede realiza seu cadastro na plataforma para poder efetuar reservas e acessar seu histórico. 

Ator Primário: Hóspede 

Pré-condições: O hóspede acessa o site e opta por criar uma conta. 

Fluxo Principal: 

1) O hóspede clica em "Cadastrar". 
2) O sistema apresenta um formulário com campos obrigatórios (nome, e-mail, telefone, CPF, senha). 
3) O hóspede preenche e envia o formulário. 
4) O sistema valida os dados, cria o perfil e exibe mensagem de sucesso. 

Pós-condições: O hóspede tem uma conta ativa na plataforma.

### Gerenciar Quartos (CSU03) 

Sumário: O Administrador realiza a gestão dos quartos disponíveis no hotel, podendo incluir, remover, alterar ou consultar os dados dos quartos. 

Ator Primário: Administrador. 

Ator Secundário: Recepcionista (com acesso somente de consulta). 

Pré-condições: O Administrador deve estar autenticado no sistema com permissões adequadas. 

Fluxo Principal: 

1) O Administrador requisita a manutenção dos quartos. 
2) O Sistema apresenta as operações disponíveis: inclusão de novo quarto, alteração, exclusão e consulta de informações. 
3) O Administrador seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso. 
4) Se o Administrador desejar continuar com a gestão de quartos, o caso de uso retorna ao passo 2; caso contrário, o caso de uso é encerrado. 

Fluxo Alternativo (3): Inclusão 

 3.1 - O Administrador requisita a inclusão de um novo quarto. <br>
 3.2 - O Sistema solicita o número do quarto a ser cadastrado. <br>
 3.3 - O Administrador fornece o número. <br>
 3.4 - O Sistema verifica se o quarto já está cadastrado. <br>
     ↳ Se sim, informa que o número já está em uso e retorna ao passo 2. <br>
     ↳ Se não, apresenta um formulário em branco com os campos: Número, Tipo (ex: solteiro, casal, luxo), Capacidade, Preço da Diária, Descrição, Status (Disponível, Ocupado, Em manutenção), Observações. <br>
 3.5 - O Administrador preenche os dados. <br>
 3.6 - O Sistema valida os dados. <br>
     ↳ Se forem válidos, o novo quarto é cadastrado e a lista atualizada. <br>
     ↳ Caso contrário, o sistema informa o erro e solicita correção. <br>

Fluxo Alternativo (3): Remoção 

 3.1 - O Administrador seleciona um quarto da lista. <br>
 3.2 - O Sistema verifica se o quarto está disponível e sem reservas futuras. <br>
     ↳ Se sim, realiza a exclusão. <br>
     ↳ Se não, informa que o quarto não pode ser removido. <br>

Fluxo Alternativo (3): Alteração 

 3.1 - O Administrador seleciona um quarto. <br>
 3.2 - O Sistema exibe os dados cadastrados. <br>
 3.3 - O Administrador altera os dados desejados. <br>
 3.4 - O Sistema valida os dados. <br>
     ↳ Se forem válidos, realiza a atualização. <br>
     ↳ Caso contrário, informa o erro. <br>

Fluxo Alternativo (3): Consulta 

 3.1 - O Administrador opta por pesquisar um quarto pelo número, tipo ou status. <br>
 3.2 - O Sistema apresenta os resultados em uma lista. <br>
 3.3 - O Administrador seleciona um quarto. <br>
 3.4 - O Sistema exibe os dados detalhados do quarto. <br>

Pós-condições: Um quarto foi inserido, removido, alterado ou visualizado no sistema com sucesso. 

### Efetuar Reserva Online (CSU04) 

Sumário: O hóspede logado realiza uma reserva de hospedagem pelo site. 

Ator Primário: Hóspede. 

Pré-condições: O hóspede precisa estar cadastrado e autenticado.  

Fluxo Principal: 
1) O hóspede acessa a página de reservas. 
2) Seleciona as datas de entrada e saída. 
3) O sistema exibe os quartos disponíveis. 
4) O hóspede escolhe o quarto e confirma a reserva. 
5) O sistema registra a reserva e exibe os dados. 

Pós-condições: A reserva é registrada no sistema. 

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
