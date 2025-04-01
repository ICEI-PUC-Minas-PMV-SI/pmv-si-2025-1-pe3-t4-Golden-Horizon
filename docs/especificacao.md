# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta parte do trabalho você deve detalhar a documentação dos requisitos do sistema proposto de acordo com as seções a seguir. Ressalta-se que aqui é utilizado como exemplo um sistema de gestão de cursos de aperfeiçoamento.

## 3.1 Objetivos deste documento
Descrever e especificar as necessidades da Coordenação do Curso de Sistemas de Informação da PUC Minas que devem ser atendidas pelo projeto SCCA – Sistema de Cadastro de Cursos de Aperfeiçoamento.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais
O produto será denominado SCCA – Sistema de Cadastro de Cursos de Aperfeiçoamento. Ele terá somente um componente (módulo) com os devidos elementos necessários à gestão de cursos.

### 3.2.2 Missão do produto
Gerenciar informações sobre a oferta de cursos de aperfeiçoamento, gerenciar a composição das turmas, alunos, professores e matrículas. 

### 3.2.3 Limites do produto
O SCCA não fornece nenhuma forma de avaliação de alunos, pagamento de parcelas do curso, pagamento a professore e agendamentos. O SCCA não contempla o atendimento a vários cursos de Sistemas de Informação de outras unidades da PUC Minas.

### 3.2.4 Benefícios do produto

| # | Benefício | Valor para o Cliente |
|--------------------|------------------------------------|----------------------------------------|
|1 | Facilidade no cadastro de dados | Essencial |
|2 | Facilidade na recuperação de informações | Essencial | 
|3 | Segurança no cadastro de matrículas | Essencial | 
|4 | Melhoria na comunicação com os alunos | Recomendável | 

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
| RNF1 | O ambiente operacional a ser utilizado é o Windows XP. |
| RNF2 | O sistema deverá executar em um computador configurado com uma impressora de tecnologia laser ou de jato de tinta, a ser usada para impressão dos relatórios. |
| RNF3 | Segurança O produto deve restringir o acesso por meio de senhas individuais para o usuário. |
| ... | ... | ... |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Coordenador | Usuário gerente do sistema responsável pelo cadastro e manutenção de cursos de aperfeiçoamento. Possui acesso geral ao sistema. |
| Secretaria | Usuário responsável por registros de alunos, professores, turmas e gerência de matrículas. |
| ... | ... | ... |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso
Como observado no diagrama de casos de uso da Figura 1, a secretária poderá gerenciar as matrículas e professores no sistema, enquanto o coordenador, além dessas funções, poderá gerenciar os cursos de aperfeiçoamento.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](https://github.com/user-attachments/assets/41f6b731-b44e-43aa-911f-423ad6198f47)
 
### 3.4.2 Descrições de Casos de Uso

Cada caso de uso deve ter a sua descrição representada nesta seção. Exemplo:

#### Gerenciar Professor (CSU01)

Sumário: A Secretária realiza a gestão (inclusão, remoção, alteração e consulta) dos dados sobre professores.

Ator Primário: Secretária.

Ator Secundário: Coordenador.

Pré-condições: A Secretária deve ser validada pelo Sistema.

Fluxo Principal:

1)  A Secretária requisita manutenção de professores.
2)  O Sistema apresenta as operações que podem ser realizadas: inclusão de um novo professor, alteração de um professor, a exclusão de um professor e a consulta de dados de um professor.
3)  A Secretária seleciona a operação desejada: Inclusão, Exclusão, Alteração ou Consulta, ou opta por finalizar o caso de uso.
4)  Se a Secretária desejar continuar com a gestão de professores, o caso de uso retorna ao passo 2; caso contrário o caso de uso termina.

Fluxo Alternativo (3): Inclusão

a) A Secretária requisita a inclusão de um professor. <br>
b) O Sistema apresenta uma janela solicitando o CPF do professor a ser cadastrado. <br>
c) A Secretária fornece o dado solicitado. <br>
d) O Sistema verifica se o professor já está cadastrado. Se sim, o Sistema reporta o fato e volta ao início; caso contrário, apresenta um formulário em branco para que os detalhes do professor (Código, Nome, Endereço, CEP, Estado, Cidade, Bairro, Telefone, Identidade, Sexo, Fax, CPF, Data do Cadastro e Observação) sejam incluídos. <br>
e) A Secretária fornece os detalhes do novo professor. <br>
f) O Sistema verifica a validade dos dados. Se os dados forem válidos, inclui o novo professor e a grade listando os professores cadastrados é atualizada; caso contrário, o Sistema reporta o fato, solicita novos dados e repete a verificação. <br>

Fluxo Alternativo (3): Remoção

a) A Secretária seleciona um professor e requisita ao Sistema que o remova. <br>
b) Se o professor pode ser removido, o Sistema realiza a remoção; caso contrário, o Sistema reporta o fato. <br>

Fluxo Alternativo (3): Alteração

a) A Secretária altera um ou mais dos detalhes do professor e requisita sua atualização. <br>
b) O Sistema verifica a validade dos dados e, se eles forem válidos, altera os dados na lista de professores, caso contrário, o erro é reportado. <br>
 
Fluxo Alternativo (3): Consulta

a) A Secretária opta por pesquisar pelo nome ou código e solicita a consulta sobre a lista de professores. <br>
b) O Sistema apresenta uma lista professores. <br>
c) A Secretária seleciona o professor. <br>
d) O Sistema apresenta os detalhes do professor no formulário de professores. <br>

Pós-condições: Um professor foi inserido ou removido, seus dados foram alterados ou apresentados na tela.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema. A Matrícula deve conter a identificação do funcionário responsável pelo registro, bem com os dados do aluno e turmas. Para uma disciplina podemos ter diversas turmas, mas apenas um professor responsável por ela.

#### Figura 2: Diagrama de Classes do Sistema.
 
![image](https://github.com/user-attachments/assets/abc7591a-b46f-4ea2-b8f0-c116b60eb24e)


### 3.4.4 Descrições das Classes 

| # | Nome | Descrição |
|--------------------|------------------------------------|----------------------------------------|
| 1 | Aluno | Cadastro de informações relativas aos alunos. |
| 2 | Curso | Cadastro geral de cursos de aperfeiçoamento. |
| 3 | Matrícula | Cadastro de Matrículas de alunos nos cursos. |
| 4 | Turma | Cadastro de turmas.
| 5 | Professor | Cadastro geral de professores que ministram as disciplinas. |
| ... | ... | ... |
