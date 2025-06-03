# 📘 Padrões de Codificação – Agenda Pro

Este documento define os padrões de codificação a serem seguidos por todos os membros da equipe durante o desenvolvimento do projeto *Agenda Pro*.

---

## 1. Nomenclatura

### 1.1 Classes e Interfaces
- Usar **substantivos**
- Estilo: `PascalCase`  
  Ex: `CalendarioMensal`, `GerenciadorDeLembretes`
- Interfaces podem começar com `I`  
  Ex: `IServicoNotificacao`

### 1.2 Métodos
- Usar **verbos** ou frases verbais
- Estilo: `camelCase`  
  Ex: `criarLembrete()`, `buscarPorData()`
- Métodos de teste: `deveComportamento_quandoCondicao()`  
  Ex: `deveCriarLembrete_quandoDadosValidos()`

### 1.3 Variáveis e Parâmetros
- Usar `camelCase`  
  Ex: `nomeUsuario`, `listaDeEventos`
- Evitar abreviações exceto comuns (`id`, `url`, `http`)

### 1.4 Constantes
- Estilo: `SNAKE_CASE_MAIÚSCULO`  
  Ex: `TEMPO_PADRAO_NOTIFICACAO`, `MAX_TAMANHO_DESCRICAO`

### 1.5 Pacotes
- Apenas letras **minúsculas**  
  Ex: `com.agendapro.lembretes`, `com.agendapro.usuario`

---

## 2. Formatação

### 2.1 Indentação
- Usar **4 espaços** (sem tabs)
- Alinhar chaves `{}` verticalmente

### 2.2 Comprimento de Linha
- Limite: **80–120 caracteres**
- Quebrar logicamente linhas longas

### 2.3 Espaços em Branco
- 1 espaço após palavras-chave (`if`, `for`, etc.)
- 1 espaço ao redor de operadores: `=`, `+`, `-`
- Sem espaços entre `(` e `)`

### 2.4 Organização de Arquivos
- Uma **classe por arquivo**
- Ordem: atributos → construtores → métodos
- Agrupar métodos por funcionalidade

---

## 3. Documentação

### 3.1 Comentários
- Explicar o **"por quê"**, não o "como"
- Linha única: `// Este método envia notificação`
- Multilinha:


### 3.2 Javadoc / Docstrings
- Todo método público deve ser documentado
- Incluir: propósito, parâmetros, retorno, exceções

---

## 4. Práticas de Codificação

### 4.1 Princípios SOLID

- **SRP** – Uma classe → uma responsabilidade
- **OCP** – Classes abertas para extensão, fechadas para modificação
- **LSP** – Subclasses devem substituir superclasses sem quebrar o código
- **ISP** – Interfaces pequenas e coesas
- **DIP** – Depender de abstrações, não implementações

### 4.2 Tratamento de Erros
- Usar exceções para situações excepcionais
- Capturar exceções **específicas**
- Documentar exceções lançadas

### 4.3 Código Limpo
- Métodos pequenos e objetivos
- DRY: **Don't Repeat Yourself**
- Preferir composição à herança
- Evitar efeitos colaterais
- Não usar **números mágicos** ou **strings hardcoded**

---

## 5. Testes

### 5.1 Nomenclatura de Testes
- Padrão: `deveComportamento_quandoCondicao()`

### 5.2 Estrutura de Testes
- AAA: **Arrange → Act → Assert**
- Testes unitários devem ser **independentes**
- Usar mocks e stubs quando necessário

### 5.3 Cobertura de Testes
- Alvo: **80% ou mais**
- Priorizar testes da **lógica de negócio**

---

## 6. Controle de Versão

### 6.1 Mensagens de Commit
- Formato: `[tipo]: descrição curta`  
Ex: `feat: adicionar repetição de lembretes`
- Tipos:
- `feat`: nova funcionalidade
- `fix`: correção
- `docs`: documentação
- `style`: formatação
- `refactor`: refatoração
- `test`: testes
- `chore`: tarefa técnica

### 6.2 Branches
- Formato: `tipo/descricao`  
Ex: `feature/notificacoes`, `fix/erro-login`

---

> 🧠 **Nota:** Este documento deve ser seguido por todos os colaboradores do projeto *Agenda Pro* e atualizado conforme o projeto evolui.
