# ⚔️ HyBrasil RPG - AI Text Adventure Engine

<div align="center">

[![PLAY NOW](https://img.shields.io/badge/🎮%20PLAY%20NOW-Click%20Here%20to%20Start-red?style=for-the-badge&logo=google-chrome)](https://mael-retro-rpg.github.io/HyBrasil_RPG/)

</div>

[![Author](https://img.shields.io/badge/Author-Mael%20Retro%20RPG-purple)](https://github.com/mael-retro-rpg)
[![Engine](https://img.shields.io/badge/Powered%20By-Google%20Gemini-blue)](https://deepmind.google/technologies/gemini/)
[![License](https://img.shields.io/badge/License-MIT-green)]()

[🇺🇸 English](#english) | [🇧🇷 Português](#português)

---

<a name="english"></a>
## 🇺🇸 English

### About the Project
**HyBrasil RPG** is a browser-based Text RPG engine powered by Artificial Intelligence (Google Gemini). It transforms a static rulebook (Markdown file) into a dynamic, infinite adventure where the AI acts as the Dungeon Master, managing combat, narrative, and inventory in real-time.

Developed by **Mael Retro RPG**, this project demonstrates how to integrate Generative AI with classic RPG mechanics using simple HTML, CSS, and JavaScript.

### ✨ Key Features
* **AI Dungeon Master:** Uses Google's Gemini 2.5 Flash model to narrate the story and strictly enforce game rules.
* **Visual HUD:** Real-time interface showing character names, classes, positions (Front/Back), and Health Bars.
* **Dynamic Portraits:** Displays character images based on Class and Gender automatically.
* **Save & Load system:** Save your progress locally (JSON file) and resume anytime.
* **Modular Rules:** The game logic is read from an external `regras.md` file, allowing you to change the entire RPG system without touching the code.
* **Secure:** Your API Key is stored only in your browser's Local Storage.

### 🚀 How to Play
1.  **Get an API Key:** You need a free Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  **Start the Game:** Click the **PLAY NOW** button at the top of this page.
3.  **Login:** Paste your API Key on the login screen.
4.  **Play:** Create your party (e.g., "Warrior and Mage") and explore HyBrasil!

### 📂 File Structure
* `index.html`: The main engine (UI + Logic).
* `regras.md`: The "brain". Contains the lore, classes, and math of the RPG system.
* `img/`: (Optional) Folder where character portraits are stored (e.g., `W_M.png` for Warrior Male).

---

<a name="português"></a>
## 🇧🇷 Português

### Sobre o Projeto
**HyBrasil RPG** é um motor de RPG de Texto via navegador impulsionado por Inteligência Artificial (Google Gemini). Ele transforma um livro de regras estático (arquivo Markdown) em uma aventura infinita e dinâmica, onde a IA atua como o Mestre (Dungeon Master), gerenciando combate, narrativa e inventário em tempo real.

Desenvolvido por **Mael Retro RPG**, este projeto demonstra como integrar IA Generativa com mecânicas clássicas de RPG usando HTML, CSS e JavaScript puro.

### ✨ Funcionalidades Principais
* **Mestre via IA:** Utiliza o modelo Gemini 2.5 Flash do Google para narrar a história e aplicar as regras rigorosamente.
* **HUD Visual:** Interface em tempo real mostrando nomes, classes, posições (Frente/Trás) e Barras de Vida.
* **Retratos Dinâmicos:** Exibe imagens dos personagens automaticamente com base na Classe e Gênero.
* **Sistema de Salvar e Carregar:** Salve seu progresso localmente (arquivo JSON) e continue de onde parou.
* **Regras Modulares:** A lógica do jogo é lida de um arquivo externo `regras.md`. Você pode mudar todo o sistema do RPG sem tocar no código.
* **Segurança:** Sua Chave de API é salva apenas no armazenamento local do seu navegador.

### 🚀 Como Jogar
1.  **Obtenha uma Chave API:** Você precisa de uma chave gratuita do Google Gemini no [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  **Inicie o Jogo:** Clique no botão vermelho **PLAY NOW** no topo desta página.
3.  **Login:** Cole sua Chave API na tela inicial.
4.  **Jogue:** Crie sua dupla (ex: "Guerreiro e Mago") e explore HyBrasil!

### 📂 Estrutura de Arquivos
* `index.html`: O motor principal (Interface + Lógica).
* `regras.md`: O "cérebro". Contém a história, classes e matemática do sistema.
* `*.png`: Imagens dos personagens (ex: `W_M.png` para Guerreiro Masculino, `M_F.png` para Mago Feminino).

---

### 🎨 Customization / Personalização

To add new images, save them in the root folder using this naming convention:
Para adicionar novas imagens, salve na pasta raiz usando este padrão de nome:

Format: `[CLASS_CODE]_[GENDER].png`

* **W**: Warrior / Guerreiro
* **H**: Hunter / Caçador
* **M**: Mage / Mago
* **C**: Cleric / Clérigo
* **P**: Paladin / Paladino

Example/Exemplo: `P_F.png` (Paladin Female / Paladina).

---

Developed with ❤️ by **Mael Retro RPG**.
