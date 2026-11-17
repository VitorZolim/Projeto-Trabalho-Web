# Catálogo de Ferramentas de Tecnologia e Programação

## 1. Identificação da Dupla
* **Integrante 1:** Victor Faleiros Guilherme Garrefa - **RA:** 2840482613011
* **Integrante 2:** Vitor David Zolim - **RA:** 2840482613019

---

## 2. Mapeamento das Questões
Mapeamento dos trechos de código e funções onde cada requisito de avaliação foi implementado:

- **Questão 01:** `JS/app.js`  
  **Descrição:** Declarado um Array com 31 ferramentas e seus atributos, distribuídos em 4 categorias: Linguagens, Frameworks, IDEs e IAs. Desenvolvido o objeto catálogo, contendo os métodos necessários para adicionar e remover itens.

- **Questão 02:** `JS/app.js`  
  **Descrição:** Desenvolvidas duas funções: `criarCard()`, responsável por criar os elementos e as informações de cada ferramenta, e `renderizar()`, responsável por exibir os cards na página. Também foram integradas informações e funcionalidades das demais questões à criação dos cards.

- **Questão 03:** `JS/app.js`  
  **Descrição:** Criada a função `filtragem()`, responsável por percorrer a lista e buscas por nome e categoria. Utiliza `forEach()` e `toLowerCase()` para permitir buscas sem diferenciar letras maiúsculas e minúsculas, combinando com a categoria selecionada.

- **Questão 04:** `JS/app.js`  
  **Descrição:** Desenvolvida a funcionalidade para adicionar novas ferramentas ao catálogo, seguindo os atributos estabelecidos na Questão 01. Implementadas validações de entrada e um evento para realizar o cadastro de novos itens.

- **Questão 05:** `JS/app.js / CSS/style.css`  
  **Descrição:** Desenvolvida a funcionalidade de alternância do valor booleano `destaque`, permitindo marcar ou desmarcar ferramentas como destaque. Também foi implementada uma diferencia visual nos cards que possuem o atributo como `true`.

- **Questão 06:** `JS/app.js`  
  **Descrição:** Criada a função responsável por atualizar o painel com informações correspondentes aos itens exibidos, como quantidade de ferramentas, destaques e demais dados solicitados. A atualização ocorre conforme as interações das Questões 03 e 05.

  **Observação:** Foi utilizado o atributo ano para calcular a média, conforme solicitado. O toFixed(2) foi mantido para seguir o que a questão pedia, mesmo gerando casas decimais não muito intuitivas para esse tipo de dado.

- **Questão 07:** `JS/app.js / HTML/index.html / CSS/style.css`  
  **Descrição:** Desenvolvido o projeto seguindo uma organização entre HTML, CSS e JavaScript, separando a estrutura da página, a estilização e as funcionalidades. A implementação também buscou manter uma organização e padronização do código.

- **Questões Extras:** `JS/app.js / HTML/index.html / CSS/style.css`  
  **Descrição:** Foram desenvolvidos dois desafios extras:
  1. **Botão Remover:** permite remover ferramentas individualmente pelos cards, utilizando confirmação antes da exclusão e atualizando a listagem.
  2. **Tema Escuro:** implementado um botão junto ao footer do HTML, com evento em JavaScript e estilos específicos no CSS para alternar entre os temas claro e escuro.

---

## 3. Divisão de Tarefas

- **Victor Faleiros:**
  - Responsável pelas questões: `[R2, R4, R6, R7]`.
  - **Contribuições:** Responsável pelo desenvolvimento das questões pares, seguindo as recomendações da Questão 07. Também desenvolveu a estrutura inicial do `index.html` e o design da página utilizando CSS.

- **Vitor David:**
  - Responsável pelas questões: `[R1, R3, R5, R7]`.
  - **Contribuições:** Responsável pelo desenvolvimento das questões ímpares, seguindo as recomendações da Questão 07. Também desenvolveu os dois desafios extras: remoção de cards e implementação do tema escuro.

---

## 4. Dificuldades Encontradas e Soluções

1. **Dificuldade 1: Adaptação à sintaxe e à estrutura do JavaScript.**
   - **Solução:** Nenhum dos integrantes possui muita familiaridade com a linguagem. Entretanto, conforme as questões foram desenvolvidas individualmente, a compreensão da sintaxe e dos recursos do JavaScript melhorou. Também foram utilizados materiais de consulta, como o W3Schools, além de ferramentas de IA para auxiliar no aprendizado.

2. **Dificuldade 2: CSS e organização da estrutura visual.**
   - **Solução:** A estruturação do HTML facilitou a compreensão do CSS, principalmente em relação à hierarquia dos elementos, espaçamentos e organização com Grid e Flexbox. Também foram realizados testes separados em outros arquivos para compreender melhor os seus comportamentos.

3. **Dificuldade 3: Compreensão dos requisitos e das formas de implementação.**
   - **Solução:** Apesar de entender o que cada exercício solicitava, a falta de prática com JavaScript dificultou inicialmente identificar a forma como era exigido a implementação. Conforme as primeiras questões foram concluídas, fico mais fácil realizar as outras questões. Também foram utilizadas ferramentas de IA para obter exemplos e explicações mais específicas sobre conceitos e funcionalidades que geraram dúvidas.

---

## 5. Declaração de Uso de Inteligência Artificial (IA)

- **Ferramentas utilizadas:** ChatGPT e Claude Code.

- **Finalidade e aplicação:** As ferramentas de IA foram utilizadas como apoio durante o desenvolvimento do projeto, principalmente para compreender melhor os requisitos dos exercícios, esclarecer dúvidas sobre a sintaxe e os recursos do JavaScript e obter exemplos e explicações sobre diferentes possibilidades de implementação. Também foi utilizada para preencher os dados da lista da Questão 01, mas a escolha das tecnologias, dos atributos e o padrão das descrições já haviam sido definidos anteriormente. Além disso, auxiliaram na compreensão de trechos de código e funcionalidades cuja implementação não estava totalmente clara. Como compreender o código desenvolvido pelo outro integrante para realizar a integração das funcionalidades.