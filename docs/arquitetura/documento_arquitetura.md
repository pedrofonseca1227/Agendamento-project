# Documento de Arquitetura – Agenda Pro

## Histórico de Revisões deste Arquivo

| Data       | Versão | Descrição               | Autor             |
|------------|--------|-------------------------|-------------------|
| 11/04/2025 | 1.0    | Versão inicial          | Pedro Henrique    |
| 12/04/2025 | 1.1    | Adição da Visão Lógica  | Juan Alfredo      |

---

## 1. Introdução

### 1.1 Finalidade

Este documento descreve a arquitetura de software do projeto *Agenda Pro*, incluindo suas decisões técnicas, modelo arquitetural, organização lógica e componentes principais. Ele serve como base para implementação, testes e evolução futura do sistema.

### 1.2 Escopo

O sistema *Agenda Pro* é um aplicativo móvel para controle de compromissos com funcionalidades como criação, edição e exclusão de lembretes, notificações, visualização diária/semanal e repetição de eventos. A arquitetura considera modularidade, portabilidade e simplicidade.

### 1.3 Definições, Acrônimos e Abreviações

- **UI**: Interface do Usuário  
- **MVP**: Minimum Viable Product  
- **UML**: Unified Modeling Language  
- **DoR**: Definition of Ready  
- **Flutter**: Framework para desenvolvimento mobile  
- **SOLID**: Conjunto de princípios de design orientado a objetos  

---

## 2. Representação Arquitetural

### 2.1 Modelo Arquitetural

O projeto utiliza a **arquitetura em camadas**, separando as responsabilidades em:

- Camada de Apresentação (UI)
- Camada de Lógica de Negócio
- Camada de Dados

### 2.2 Justificativa

Escolhemos o modelo em camadas por sua simplicidade, facilidade de teste, organização de código e compatibilidade com o framework Flutter. Ele facilita a evolução do sistema e respeita os princípios de separação de responsabilidade.

---

## 3. Metas e Restrições da Arquitetura

### 3.1 Metas

- Separar claramente responsabilidades
- Garantir código reutilizável e testável
- Facilitar manutenção e evolução futura
- Manter a estrutura simples e objetiva

### 3.2 Restrições

- Apenas dispositivos Android (mínimo: Android 8.0)
- Framework Flutter
- Notificações locais sem backend na fase 1
- Sem uso de banco de dados online (offline-first)

---

## 4. Visão de Casos de Uso

### 4.1 Diagrama de Casos de Uso

Disponível em: `/docs/diagramas/caso_de_uso.drawio`

### 4.2 Descrição dos Casos de Uso Significativos

- Criar Lembrete  
- Editar Lembrete  
- Excluir Lembrete  
- Ver Agenda Diária  
- Configurar Repetição  
- Ativar Tema Escuro  
- Receber Notificações

---

## 5. Visão Lógica

### 5.1 Visão Geral

O sistema está organizado em pacotes que separam claramente lógica, dados e apresentação.

### 5.2 Padrões de Design Significativos

- `models`: define entidades como `Lembrete`, `Usuario`, `Notificacao`  
- `services`: lógica de negócio e controle de lembretes  
- `ui`: telas e widgets  
- `repositories`: abstrações de acesso aos dados

### 5.3 Diagramas de Classes

Disponível em: `/docs/diagramas/modelo_de_dominio.drawio`  
Versão em Mermaid: `/docs/diagramas/agenda_pro_diagrama_classes.mmd`

---

## 6. Visão de Processos

O app é monothread na maior parte do tempo, com uso de `Future`s e `async/await` para notificações e carregamento de dados.

---

## 7. Visão de Implantação

### 7.1 Diagrama de Implantação

Disponível em: `/docs/diagramas/implantacao.drawio` (a ser elaborado)

### 7.2 Descrição dos Nós

- Dispositivo Android  
- Sistema operacional  
- Aplicativo Agenda Pro (container Flutter)

---

## 8. Visão de Implementação

### 8.1 Visão Geral

A implementação segue a estrutura padrão de projetos Flutter, com divisão clara em camadas.

### 8.2 Camadas

- `UI`: interface com o usuário (widgets, temas)  
- `Lógica`: gerenciamento de lembretes, notificações  
- `Dados`: entidades e simulação de persistência local  

---

## 9. Visão de Dados

### 9.1 Modelo de Dados

O modelo de dados inclui as classes: `Lembrete`, `Usuario`, `Notificacao`, `Configuracoes`.  
Disponível em `/docs/diagramas/modelo_de_dominio.drawio`.

---

## 10. Tamanho e Performance

- O app deve ocupar no máximo 20MB instalado  
- Tempo de resposta das ações: < 500ms  
- Notificações devem ser pontuais com precisão de 99%

---

## 11. Qualidade

### Atributos atendidos:

- **Usabilidade**: interface intuitiva com modo escuro  
- **Portabilidade**: suporte Android 8+  
- **Manutenibilidade**: código modular  
- **Eficiência**: carregamento leve e rápido  
- **Confiabilidade**: notificações confiáveis e persistentes

---

## 12. Princípios SOLID Aplicados

- **SRP**: cada classe com responsabilidade única (ex: `NotificacaoService`)  
- **OCP**: estrutura modular preparada para extensão (ex: `Repository`)  
- **LSP**: modelo de herança respeitado, especialmente em futuras interfaces  
- **ISP**: interfaces pequenas para serviços, mantendo coesão  
- **DIP**: uso de abstrações (`Repository`, `Service`) para separação entre camadas

---

## 13. Padrões de Design Utilizados

- **Repository Pattern**: abstrai a fonte dos dados  
- **MVC simplificado**: separação de UI, controller e model  
- **Service Layer**: lógica de negócio separada da apresentação  
- **Factory Pattern** (previsto): criação de lembretes pré-configurados