# 📄 Documento de Requisitos – Agenda Pro

---

## Histórico de Revisões Deste Arquivo

| Data       | Versão | Descrição             | Autor           |
|------------|--------|-----------------------|-----------------|
| 11/04/2025 | 1.0    | Versão inicial        | Pedro Henrique  |
| 12/04/2025 | 1.1    | Inclusão da priorização MoSCoW | Juan Alfredo   |

---

## 1. Introdução

### 1.1 Propósito

Este documento tem como objetivo descrever de forma clara e organizada todos os requisitos funcionais e não funcionais do sistema *Agenda Pro*, para guiar sua implementação, validação e evolução.

### 1.2 Escopo

O *Agenda Pro* é um aplicativo móvel de agenda e lembretes, voltado para usuários que desejam organizar compromissos, tarefas e eventos pessoais, com foco em simplicidade, praticidade e notificações pontuais.

### 1.3 Definições, Acrônimos e Abreviações

| Termo/Acrônimo | Definição |
|----------------|-----------|
| MVP            | Minimum Viable Product |
| UI             | Interface do Usuário |
| RF             | Requisito Funcional |
| RNF            | Requisito Não Funcional |
| CRUD           | Criar, Ler, Atualizar, Deletar |

---

## 2. Descrição Geral

### 2.1 Perspectiva do Produto

O *Agenda Pro* é um aplicativo independente, projetado inicialmente para dispositivos Android. Pode futuramente ser integrado com serviços de calendário externos como Google Calendar.

### 2.2 Funcionalidades do Produto

- Criar, editar e excluir lembretes
- Visualização da agenda por dia e semana
- Notificações no horário agendado
- Repetição de lembretes
- Modo escuro
- Login com e-mail e senha

### 2.3 Características dos Usuários

- Usuários com idade entre 15 e 60 anos
- Usuários com nível básico de habilidade com smartphones
- Pessoas que desejam gerenciar tarefas e compromissos pessoais

### 2.4 Restrições

- Funcionalidade offline obrigatória no MVP
- Suporte exclusivo para Android 8.0 ou superior
- Sem integração com serviços externos na primeira fase
- Desenvolvimento em Flutter

---

## 3. Requisitos Específicos

### 3.1 Requisitos Funcionais

| ID    | Descrição                                            | Prioridade |
|-------|--------------------------------------------------------|------------|
| RF01  | O sistema deve permitir criar lembretes com data e hora | Alta       |
| RF02  | O sistema deve permitir editar lembretes existentes     | Alta       |
| RF03  | O sistema deve permitir excluir lembretes               | Alta       |
| RF04  | O sistema deve enviar notificações na data/hora agendada| Alta       |
| RF05  | O usuário deve conseguir visualizar seus lembretes do dia| Alta      |
| RF06  | O sistema deve permitir configurar repetição de lembretes| Média     |
| RF07  | O sistema deve permitir login com e-mail e senha        | Média      |
| RF08  | O sistema deve permitir alternar entre modo claro e escuro | Média   |
| RF09  | O sistema deve exibir os lembretes da semana            | Média      |

### 3.2 Requisitos Não Funcionais

| ID     | Categoria    | Descrição                                                                 | Prioridade |
|--------|--------------|---------------------------------------------------------------------------|------------|
| RNF01  | Usabilidade  | A interface deve ser responsiva e intuitiva                               | Alta       |
| RNF02  | Performance  | O tempo de resposta das ações não deve exceder 500ms                      | Alta       |
| RNF03  | Segurança    | As credenciais do usuário devem ser protegidas e validadas localmente     | Média      |
| RNF04  | Confiabilidade | Notificações devem funcionar com 99% de precisão                         | Alta       |
| RNF05  | Compatibilidade | Suporte para dispositivos Android 8.0 ou superior                       | Alta       |

---

## 4. Visão Geral do Sistema

O sistema é composto por uma interface principal de agenda, módulos de criação e edição de lembretes, um gerenciador de notificações e configurações do usuário.  
Referência ao diagrama: `/docs/diagramas/modelo_de_dominio.drawio`

---

## 5. Casos de Uso

Diagrama disponível em: `/docs/diagramas/caso_de_uso.drawio`  
Casos de uso documentados em: `/docs/historias_de_usuarios.md`

---

## 6. Priorização de Requisitos

A priorização foi realizada usando o método **MoSCoW**, combinado com matriz **Valor x Esforço**.  
Exemplos:

- `RF01` a `RF05`: **Must Have**
- `RF06`, `RF07`, `RF08`: **Should Have**
- `RF09`: **Could Have**

Essa priorização guiou o planejamento dos sprints e definição do MVP.

---

## 7. Aprovação

| Nome           | Papel                    | Assinatura | Data       |
|----------------|--------------------------|------------|------------|
| Pedro Henrique | Product Owner / Dev      | —          | 11/04/2025 |
| Juan Alfredo   | Desenvolvedor / Revisor  | —          | 11/04/2025 |

