# 1. INTRODUÇÃO

<!-- Contextualizar a área de pesquisa do trabalho, apresentando conceitos e dados relacionados antes de apresentar a problemática a ser investigada. -->

A história da hotelaria no Brasil é longa e reflete o desenvolvimento do turismo e transformações econômicas e culturais da própria sociedade brasileira. Suas origens remontam ao período colonial, evoluindo de acomodações rústicas e improvisadas à beira das estradas abertas pelos bandeirantes (CNC, 2005, p.16) para um setor complexo e dinâmico. 

A pesquisa Hotelaria em números, elaborada pela JLL (2024), estima com base em seu próprio banco de dados, informações de sites especializados e dados de mercado que existam cerca de 565.987 quartos disponíveis em 10.650 hotéis, flats e resorts no Brasil até julho de 2024. 

“O Mercado Hoteleiro é um dos principais segmentos da Cadeia Produtiva do Turismo” (TOMÉ, 2018), setor econômico aquecido no Brasil em 2024. Os resultados consolidados do setor em janeiro de 2025 em comparação ao mesmo mês do ano anterior registram apenas resultados positivos nas taxas de ocupação, que indica a porcentagem de unidades vendidas em relação ao total disponível, diária média, que retrata o preço médio calculado para cada diária vendida em um determinado período e RevPAR, receita média obtida por cada quarto disponível. (FOHB, 2025). 

O Panorama da Hotelaria Brasileira em 2024 (FOHB, 2024) prevê investimentos de 8,4 bilhões de reais até 2028, um aumento de 26,9% em relação à perspectiva de 2023. Espera-se que o valor possibilite a assinatura de 137 novos contratos de hotéis de diferentes segmentos de mercado. 

Estes dados reforçam a perspectiva de crescimento contínuo do setor no país através do fortalecimento da infraestrutura hoteleira e do posicionamento do Brasil como destino atraente para investidores e turistas, tanto nacionais quanto internacionais. 

## 1.1. Problema

<!-- Nesse momento você deve apresentar o problema que a sua aplicação deve resolver. No entanto, não é a hora de comentar sobre a aplicação. 
Descreva também o contexto em que essa aplicação será usada, se houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de fato existir, pois ainda não é a hora de apresentar requisitos detalhados ou projetos. -->
Os hotéis no Brasil estão distribuídos entre redes nacionais, internacionais e hotéis independentes (não apenas hotéis sem nenhuma afiliação de marca, mas também unidades pertencentes a cadeias hoteleiras nacionais com menos de 600 quartos). No total, 34,6% das propriedades possuem até 20 quartos, enquanto 48,5% têm entre 20 e 600 quartos (JLL 2024). Juntas, essas categorias representam a maioria, totalizando 83,1% de hotéis independentes no país, estabelecimentos com menor porte e necessidades específicas. 

Negócios em menor escala dispõem de menos recursos e podem se valer de processos manuais para gestão e operação. Muitos negócios não priorizam este aspecto pela crença de que o investimento em automatização “não se justifica por si só” (HOSPEDIN, 2014). 

Ao não se automatizarem, empreendimentos hoteleiros podem enfrentar diversos desafios. A inconsistência nas informações causada por erros humanos pode incluir registros incorretos de consumo, ausência de registros de clientes, não conformidade com as preferências dos hóspedes e perda de documentos importantes. Além disso, o processo de coletar, validar e verificar as informações gera lentidão e imprecisão nas ações fundamentais em todo o hotel. 

Além disso, decisões competitivas devem ser baseadas na análise de informações geradas diariamente, capturar e analisar esses dados manualmente, sem uma base sólida, exige muito mais tempo e recursos, dificultando a geração de relatórios concretos sobre preferências de hospedagem, consumo e frequência  

Por fim, não ter acesso fácil e centralizado às informações sobre os hóspedes e suas preferências dificulta a personalização de serviços, promoções e benefícios, tornando o relacionamento com o cliente mais custoso e com baixa conversão. 

## 1.2. Objetivos do trabalho

<!-- Aqui você deve descrever os objetivos do trabalho indicando que o objetivo geral é desenvolver um software para solucionar o problema apresentado acima. O objetivo geral deve resumir e apresentar a ideia central de um trabalho, descrevendo também a sua finalidade. Os objetivos específicos darão uma maior delimitação ao tema, além de detalhar os processos necessários para a realização do trabalho. -->

O objetivo geral deste trabalho é desenvolver um Sistema de Gestão Hoteleira, ferramenta que automatiza e controla os processos administrativos e operacionais de um hotel. 

Os objetivos específicos são: 

- Criar um módulo de gestão de relacionamento com o cliente (CRM) que permita que os hóspedes façam reservas e avaliações; 

- Criar um módulo de processamento de transações (TPS) para gerenciar transações como reservas, cadastro de hóspedes e pagamentos; 

- Criar um módulo de informação gerencial (MIS) que forneça dados relevantes como satisfação dos hóspedes e indicadores básicos de desempenho do negócio, como diária média, RevPAR e taxa de ocupação. 

## 1.3. Justificativa

<!-- Descreva a importância ou a motivação para trabalhar com esta aplicação que você escolheu. Indique as razões pelas quais você escolheu seus objetivos específicos ou as razões para aprofundar em certos aspectos do software. -->
Segundo LEVY-BONVIN (2003) Os primeiros sistemas administrativos de gestão hoteleira ou Sistemas de Gestão de Propriedades (PMS) surgiram no mercado a partir de 1980, e desde 1992 a tecnologia tem papel de destaque na administração de grandes redes internacionais de hospitalidade que competem para tornar a recepção mais eficiente e se destacar no cenário global. Hoje, o PMS é considerado a tecnologia mais importante no setor (“Property Management System Research Survey Results”, 2023). 

Como apontado pelo artigo de MOLL (1984), o computador era essencial para hotéis que desejassem manter um alto padrão de serviço e saúde financeira. Um sistema computadorizado otimiza as funções através da automação de tarefas manuais, do aumento da velocidade e precisão no processamento de informações, da melhoria na comunicação e acesso aos dados, da redução de erros e perdas financeiras, da otimização do planejamento e da alocação de recursos, e da consequente melhora na eficiência operacional e na satisfação dos hóspedes.  

## 1.4. Público alvo

<!-- Descreva quem serão as pessoas que usarão a sua aplicação indicando os diferentes perfis. O objetivo aqui não é definir quem serão os clientes ou quais serão os papéis dos usuários na aplicação. A ideia é, dentro do possível, conhecer um pouco mais sobre o perfil dos usuários: conhecimentos prévios, relação com a tecnologia, relações hierárquicas, etc. -->
O público-alvo desta implementação são hotéis com até 600 quartos no Brasil, seus gestores, funcionários e clientes. A aplicação se propõe a ser uma plataforma com uma curva de aprendizagem pequena e que garante eficiência a todos os usuários através de uma usabilidade simples. 
