# **⚔️ HyBrasil RPG \- Aventura de texto com IA**
<div align="center">

[![JOGUE AGORA](https://img.shields.io/badge/🎮%20PLAY%20NOW-Click%20Here%20to%20Start-red?style=for-the-badge&logo=google-chrome)](https://mael-retro-rpg.github.io/HyBrasil_RPG/)

</div>

[![Author](https://img.shields.io/badge/Author-Mael%20Retro%20RPG-purple)](https://github.com/mael-retro-rpg)
[![Engine](https://img.shields.io/badge/Powered%20By-Google%20Gemini-blue)](https://deepmind.google/technologies/gemini/)
[![License](https://img.shields.io/badge/License-MIT-green)](https://github.com/mael-retro-rpg/HyBrasil_RPG/tree/main?tab=MIT-1-ov-file)

[**📖 Manual Interativo**](https://mael-retro-rpg.github.io/HyBrasil_RPG/manual.html)

## **🇧🇷 Sobre o Projeto**

**HyBrasil RPG** é um motor de RPG de Texto via navegador impulsionado por Inteligência Artificial (Google Gemini). Ele transforma um livro de regras em uma aventura infinita e dinâmica, onde a IA atua como o Mestre (Dungeon Master), gerenciando combate, narrativa e inventário em tempo real.

Desenvolvido por **Mael Retro RPG**, este projeto demonstra como integrar IA Generativa com mecânicas clássicas de RPG usando HTML, CSS e JavaScript puro.

### **✨ Funcionalidades Principais**

* **Mestre via IA (Gemini):** Utiliza os modelos da família Google Gemini (como o veloz Flash Lite) para narrar a história e aplicar as regras rigorosamente com alta estabilidade.  
* **HUD Visual e Dinâmico:** Interface em tempo real mostrando nomes, classes, posições (Frente/Retaguarda) e Barras de Vida, que ganham vida através da leitura de blocos de dados (json\_stats) injetados de forma invisível pela IA.  
* **Auxiliares Místicos:** Desbloqueie mascotes etéreos no Nível 2 que fortalecem ataques, duplicam habilidades e podem se sacrificar para salvar o mestre.  
* **Arena de Combate Automático:** Durante as batalhas, a interface se transforma: uma fila dinâmica processa e renderiza até 6 inimigos na tela com um pergaminho focado apenas no registro dos golpes e danos.  
* **Confrontos Épicos (Bosses):** Rastreamento visual de Vilões Maiores, com moldura imersiva e Barra de Vida gigante para os chefes de campanha.  
* **Sistema de Salvar e Carregar:** Salve o seu progresso da aventura (incluindo todo o histórico do chat e fichas) localmente no navegador e continue de onde parou.  
* **Regras Embutidas:** A lógica do RPG e o catálogo do Bestiário inteiro estão contidos em um prompt interno seguro que impede a IA de esquecer as regras ao longo do jogo.  
* **Segurança e Privacidade:** A sua Chave de API é guardada apenas no armazenamento local do seu próprio navegador.

### **🚀 Como Jogar**

1. **Obtenha uma Chave API:** Você precisa de uma chave gratuita do Google Gemini no [Google AI Studio](https://aistudio.google.com/app/apikey).  
2. **Inicie o Jogo:** Clique no botão **PLAY NOW** no topo desta página (ou abra o arquivo index.html no seu navegador).  
3. **Conecte o Motor:** Cole a sua Chave API do Gemini na janela inicial.  
4. **Jogue:** Crie a sua dupla de aventureiros (ex: "Mael é o Guerreiro e Emma é a Maga") e explore HyBrasil\!

### **📂 Estrutura de Arquivos**

* index.html: O motor principal e único (Interface Visual, Scripts e o Cérebro de Prompt da IA).  
* manual.html: O guia interativo detalhando regras, personagens e monstros.  
* assets/: Pasta raiz contendo todas as artes geradas ou vinculadas ao jogo.

### **🎨 Personalização**

Para adicionar novas imagens físicas e substituir os vetores padrão, salve as artes dentro das subpastas em assets/ seguindo rigorosamente estas convenções de nomenclatura:

**👥 Heróis (assets/heroes/):** \[SIGLA\_CLASSE\]\_\[GENERO\].png

* **W**: Guerreiro(a)  
* **H**: Caçador(a)  
* **M**: Mago(a)  
* **C**: Clérigo(a)  
* **P**: Paladino(a)  
* *Exemplo:* P\_F.png (Paladina Feminina) ou W\_M.png (Guerreiro Masculino).

**🐾 Auxiliares Místicos (assets/companions/):** \[nome\_do\_mascote\].png (Tudo em minúsculo, sem acentos, e espaços viram underline \_)

* *Exemplo:* asa-de-anis.png ou serpente\_eterea.png.

**👹 Inimigos e Lacaios (assets/enemies/):** \[nome\_do\_monstro\].png (Tudo em minúsculo, sem acentos e espaços viram underline \_)

* *Exemplo:* zangao\_da\_mare.png ou escaravelho\_de\_vidro.png.

**👑 Vilões Maiores (assets/bosses/):** BOSS\_\[Nome\].png (Prefixo "BOSS\_" seguido do nome chave do sistema)

* *Exemplo:* BOSS\_HiveQueen.png ou BOSS\_MightyDragon.png.

Desenvolvido com ❤️ por **Mael Retro RPG**.
