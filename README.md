# **⚔️ HyBrasil RPG - Aventura de texto com IA**
<div align="center">

[![JOGUE AGORA](https://img.shields.io/badge/🎮%20PLAY%20NOW-Click%20Here%20to%20Start-red?style=for-the-badge&logo=google-chrome)](https://mael-retro-rpg.github.io/HyBrasil_RPG/)

</div>

[![Author](https://img.shields.io/badge/Author-Mael%20Retro%20RPG-purple)](https://github.com/mael-retro-rpg)
[![Engine](https://img.shields.io/badge/Powered%20By-Google%20Gemini-blue)](https://deepmind.google/technologies/gemini/)
[![License](https://img.shields.io/badge/License-MIT-green)]()

[**📖 Manual Interativo**](https://mael-retro-rpg.github.io/HyBrasil_RPG/manual.html)

## **🇧🇷 Sobre o Projeto**

**HyBrasil RPG** é um motor de RPG de texto via navegador impulsionado por Inteligência Artificial (Google Gemini). A IA atua exclusivamente como **Narradora**, enquanto toda a mecânica de jogo — combate, fichas, progressão e dificuldade — é processada diretamente pelo JavaScript do cliente, garantindo resultados precisos e consistentes.

Desenvolvido por **Mael Retro RPG**, o projeto demonstra como integrar IA Generativa com mecânicas clássicas de RPG usando HTML, CSS e JavaScript puro, sem dependências de servidor ou frameworks.

### **✨ Funcionalidades Principais**

* **Arquitetura JS + IA separados:** O motor de combate é determinístico e roda inteiramente no navegador. A IA (Gemini) narra exploração, dá voz a NPCs e Vilões Maiores, e recebe os resultados de batalha prontos para narrar dramaticamente.
* **Criação de personagens interativa:** Pop-up de criação com seleção visual de nome, gênero, classe e formação antes de qualquer chamada à IA.
* **5 Classes jogáveis:** Guerreiro(a), Caçador(a), Mago(a), Clérigo(a) e Paladino(a) — cada uma com habilidade passiva única e funções narrativas específicas na exploração.
* **Funções narrativas de classe:** A IA oferece opções de classe (identificar rastros, usar truques arcanos, exercer autoridade, etc.) apenas quando o contexto e a classe do herói forem compatíveis.
* **Combate automático:** Arena visual com fila dinâmica de até 6 inimigos. O JS resolve todos os turnos, aplica habilidades e exibe o log completo no Pergaminho de Resolução.
* **Bestiário com 150 criaturas:** 15 grupos de monstros, cada um com 5 lacaios e 5 criaturas maiores, distribuídos por múltiplas regiões da ilha.
* **Inimigos por região:** A fila de combate é filtrada pelo bioma atual, garantindo coerência temática com o ambiente.
* **30 ambientes visuais:** Backgrounds dinâmicos por bioma com o nome do local gerado pela IA.
* **Auxiliares Místicos (Companions):** Desbloqueados no Nível 2, fortalecem ataques na Frente, duplicam habilidades na Retaguarda e podem se sacrificar para salvar o herói de um golpe letal.
* **Sistema de XP gerenciado pelo JS:** A cada 2 vitórias o jogador escolhe qual herói recebe +1 XP. O JS aplica os novos atributos e concede o Companion ao atingir Nível 2.
* **Barra de Cansaço do grupo:** Drena por ações de exploração e combate. Ao chegar a 0, o grupo desmaia e acorda em local inesperado. Recuperável via Descanso Rápido ou Completo.
* **Confrontos com Vilões Maiores:** 2 rodadas de diálogo narrativo antes do combate. Os quatro vilões — HiveQueen, MightyDragon, AbyssalOracle e LordOfDarkness — comandam respectivamente Selvagens, Bestas, Monstros e Mortos.
* **Sistema de Salvar e Carregar:** Progresso completo (fichas, histórico, cansaço, vitórias, localização) salvo localmente no navegador.
* **Segurança e Privacidade:** A Chave de API é guardada apenas no `localStorage` do próprio navegador. Nenhum dado é enviado a servidores externos além da API do Gemini.

### **🚀 Como Jogar**

1. **Obtenha uma Chave API gratuita** no [Google AI Studio](https://aistudio.google.com/app/apikey).
2. **Inicie o Jogo:** Clique em **PLAY NOW** ou abra `index.html` no navegador.
3. **Ative o Motor:** Cole a sua Chave API na janela inicial e clique em *Ativar Motor*.
4. **Crie a sua dupla:** Preencha nome, gênero, classe e formação no pop-up de criação.
5. **Explore HyBrasil** e tome decisões — a IA narra, o JS resolve!

### **📂 Estrutura de Arquivos**

* `index.html` — Motor principal (Interface, JS Engine e Prompt da IA).
* `manual.html` — Manual interativo com regras, ambientes e bestiário completo.
* `manifest.json` — Configuração PWA para instalação no celular.
* `sw.js` — Service Worker para funcionamento offline.
* `assets/` — Pasta raiz com todas as artes do jogo.

### **🎨 Convenções de Nomenclatura dos Assets**

Para adicionar novas imagens, salve-as dentro das subpastas em `assets/` seguindo estas convenções:

**👥 Heróis (`assets/heroes/`):** `[SIGLA_CLASSE]_[GENERO].png`

* **W**: Guerreiro(a) | **H**: Caçador(a) | **M**: Mago(a) | **C**: Clérigo(a) | **P**: Paladino(a)
* *Exemplo:* `P_F.png` (Paladina Feminina) ou `W_M.png` (Guerreiro Masculino).

**🐾 Auxiliares Místicos (`assets/companions/`):** `[nome_do_companion].png` — minúsculo, sem acentos, espaços viram `_` e hífens são mantidos.

* *Exemplos:* `asa-de-anis.png`, `raposa_astral.png`, `egide_de_marfim.png`.

**👹 Inimigos (`assets/enemies/`):** `bestiary_[grupo]_[lackey|great]_[slug].png`

* *Exemplos:* `bestiary_doglike_lackey_direwolf.png`, `bestiary_golem_great_king.png`.

**👑 Vilões Maiores (`assets/bosses/`):** `BOSS_[NomeChave].png`

* *Exemplos:* `BOSS_HiveQueen.png`, `BOSS_MightyDragon.png`.

**🌄 Backgrounds (`assets/background/`):** `bg_[bioma].png`

* *Exemplos:* `bg_forest.png`, `bg_mine.png`, `bg_snowcity.png`.

---

Desenvolvido com ❤️ por **Mael Retro RPG**.
