# 📋 Matriz de Rastreabilidade de Requisitos – Agenda Pro

---

## Histórico de Revisões deste Arquivo

| Data       | Versão | Descrição             | Autor           |
|------------|--------|-----------------------|-----------------|
| 11/04/2025 | 1.0    | Versão inicial        | Pedro Henrique  |
| 12/04/2025 | 1.1    | Inclusão de dependências e testes | Juan Alfredo   |

---

## 1. Introdução

Este documento apresenta a matriz de rastreabilidade dos requisitos do sistema *Agenda Pro*, permitindo visualizar as relações entre:

- Requisitos ↔ Casos de Uso  
- Requisitos ↔ Componentes do Sistema  
- Requisitos ↔ Casos de Teste  
- Requisitos ↔ Requisitos (dependências)

---

## 2. Matriz de Rastreabilidade

### 2.1 Requisitos x Casos de Uso

| Requisito | UC01 Criar Lembrete | UC02 Editar Lembrete | UC03 Excluir Lembrete | UC04 Visualizar Agenda | UC05 Receber Notificação |
|-----------|---------------------|----------------------|------------------------|--------------------------|---------------------------|
| RF01      | X                   |                      |                        | X                        |                           |
| RF02      |                     | X                    |                        |                          |                           |
| RF03      |                     |                      | X                      |                          |                           |
| RF04      |                     |                      |                        |                          | X                         |
| RF05      |                     |                      |                        | X                        |                           |
| RF06      | X                   | X                    |                        |                          | X                         |
| RF07      |                     |                      |                        |                          |                           |
| RF08      |                     |                      |                        |                          |                           |

---

### 2.2 Requisitos x Componentes do Sistema

| Requisito | UI_Lembretes | Service_Lembretes | UI_Agenda | NotificationService | AuthModule |
|-----------|--------------|-------------------|-----------|----------------------|-------------|
| RF01      | X            | X                 | X         |                      |             |
| RF02      | X            | X                 |           |                      |             |
| RF03      | X            | X                 |           |                      |             |
| RF04      |              |                   |           | X                    |             |
| RF05      | X            |                   | X         |                      |             |
| RF06      | X            | X                 |           | X                    |             |
| RF07      |              |                   |           |                      | X           |
| RF08      | X            |                   |           |                      |             |

---

### 2.3 Requisitos x Casos de Teste

| Requisito | CT01 Criar | CT02 Editar | CT03 Excluir | CT04 Visualizar Agenda | CT05 Notificação |
|-----------|------------|-------------|--------------|-------------------------|------------------|
| RF01      | X          |             |              | X                       |                  |
| RF02      |            | X           |              |                         |                  |
| RF03      |            |             | X            |                         |                  |
| RF04      |            |             |              |                         | X                |
| RF05      |            |             |              | X                       |                  |
| RF06      | X          | X           |              |                         | X                |
| RF07      |            |             |              |                         | CT06             |
| RF08      | CT07       |             |              |                         |                  |

---

### 2.4 Requisitos x Requisitos (Dependências)

| Requisito | RF01 | RF02 | RF03 | RF04 | RF05 | RF06 | RF07 |
|-----------|------|------|------|------|------|------|------|
| RF01      | —    | X    |      |      | X    | X    |      |
| RF02      |      | —    |      |      |      |      |      |
| RF03      | X    |      | —    |      |      |      |      |
| RF04      |      |      |      | —    |      | X    |      |
| RF05      | X    |      |      |      | —    |      |      |
| RF06      | X    | X    |      | X    |      | —    |      |
| RF07      |      |      |      |      |      |      | —    |

---

## 3. Análise de Impacto

O processo de análise de impacto deve seguir os seguintes passos:

1. **Identificar o requisito** que será alterado (ex: RF04).
2. Consultar a matriz para verificar:
   - Quais **casos de uso** estão associados.
   - Quais **componentes** do sistema implementam esse requisito.
   - Quais **casos de teste** validam esse comportamento.
   - Quais **outros requisitos** são impactados por dependência.
3. Avaliar se a alteração causará mudanças técnicas, de interface ou de comportamento do usuário.
4. Documentar a análise e comunicar aos membros impactados.
5. Obter **aprovação do Product Owner** antes de aplicar mudanças.
6. Atualizar **todos os artefatos afetados**, incluindo este documento.

---

> 📌 A matriz será atualizada a cada nova funcionalidade implementada ou modificação nos requisitos.

