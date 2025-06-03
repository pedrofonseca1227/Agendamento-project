# 🧪 Plano de Testes – Agenda Pro

---

## Histórico de Revisões

| Data       | Versão | Descrição             | Autor           |
|------------|--------|-----------------------|-----------------|
| 11/04/2025 | 1.0    | Versão inicial        | Pedro Henrique  |
| 12/04/2025 | 1.1    | Inclusão da matriz de riscos | Juan Alfredo   |

---

## 1. Introdução

### 1.1 Objetivos  
Garantir que todas as funcionalidades do aplicativo *Agenda Pro* atendam aos requisitos definidos, com qualidade, desempenho e usabilidade esperados.

### 1.2 Escopo  
Este plano cobre os testes das funcionalidades de lembretes, notificações, visualização da agenda, login e configurações, no escopo do MVP.

### 1.3 Definições, Acrônimos e Abreviações

| Termo | Definição |
|-------|-----------|
| MVP   | Minimum Viable Product |
| UI    | Interface de Usuário |
| RF    | Requisito Funcional |
| RNF   | Requisito Não Funcional |
| CT    | Caso de Teste |

---

## 2. Estratégia de Teste

### 2.1 Níveis de Teste

#### 2.1.1 Testes Unitários  
Verificar funções isoladas como validações de campo, formatação de datas e lógica de agendamento.

#### 2.1.2 Testes de Integração  
Verificar a comunicação entre camadas de UI, lógica de negócios e agendador de notificações.

#### 2.1.3 Testes de Sistema  
Verificar se as funcionalidades completas do app funcionam conforme o esperado no ambiente alvo.

#### 2.1.4 Testes de Aceitação  
Testes realizados com base nos critérios de aceitação definidos para as histórias de usuário.

---

### 2.2 Tipos de Teste

#### 2.2.1 Testes Funcionais  
Cobrem requisitos funcionais como criação, edição e exclusão de lembretes.

#### 2.2.2 Testes de Performance  
Avaliar tempos de resposta ao criar lembretes ou carregar a agenda.

#### 2.2.3 Testes de Segurança  
Verificar o armazenamento e uso seguro das credenciais de login.

#### 2.2.4 Testes de Usabilidade  
Analisar a clareza da interface, acessibilidade e fluxo do usuário.

#### 2.2.5 Testes de Regressão  
Executar testes anteriormente aprovados após cada mudança no código.

---

## 3. Recursos

### 3.1 Ambientes de Teste  
- Dispositivos Android 9.0 a 13.0  
- Emulador Android no Android Studio

### 3.2 Ferramentas  
- Flutter Test  
- flutter_local_notifications (testes manuais)  
- Google Sheets (controle de casos de teste)

### 3.3 Equipe

| Nome           | Papel                     |
|----------------|---------------------------|
| Pedro Henrique | Testador e desenvolvedor  |
| Juan Alfredo   | Automatização e revisão   |

---

## 4. Cronograma

| Data         | Atividade                          |
|--------------|-------------------------------------|
| 11 a 13/04   | Elaboração de Casos de Teste        |
| 14 a 16/04   | Execução de testes manuais          |
| 17 a 19/04   | Testes de integração e regressão    |
| 20/04        | Consolidação dos resultados         |

---

## 5. Critérios

### 5.1 Critérios de Entrada  
- MVP implementado parcialmente  
- Requisitos definidos e revisados  
- Ambiente de testes configurado

### 5.2 Critérios de Saída  
- Todos os testes obrigatórios executados  
- Todos os bugs críticos resolvidos  
- Relatórios gerados e revisados

### 5.3 Critérios de Suspensão e Retomada  
- Falha crítica bloqueando execução  
- Interrupção no ambiente ou no repositório

---

## 6. Matriz de Risco e Contingência

| Risco                            | Probabilidade | Impacto | Estratégia de Mitigação                |
|----------------------------------|---------------|---------|----------------------------------------|
| Notificações não funcionarem     | Alta          | Alto    | Testar com antecedência em vários SOs |
| Interface confusa para usuários  | Média         | Médio   | Realizar teste de usabilidade          |
| Bugs em múltiplos dispositivos   | Alta          | Médio   | Testar em pelo menos 3 aparelhos reais |

---

## 7. Casos de Teste

| ID   | Descrição                              | Requisito | Pré-condições     | Passos                   | Resultado Esperado                     | Prioridade |
|------|----------------------------------------|-----------|-------------------|---------------------------|----------------------------------------|------------|
| CT01 | Criar lembrete com data e hora         | RF01      | App instalado     | Criar lembrete válido     | Lembrete salvo e notificação agendada | Alta       |
| CT02 | Editar lembrete existente              | RF02      | Lembrete existente| Alterar dados e salvar    | Dados atualizados corretamente        | Alta       |
| CT03 | Excluir lembrete                       | RF03      | Lembrete existente| Clicar em excluir         | Lembrete removido                      | Alta       |
| CT04 | Receber notificação                    | RF04      | Notificação ativa | Esperar hora agendada     | Notificação exibida                   | Alta       |
| CT05 | Alternar entre tema escuro e claro     | RF08      | App aberto        | Alternar tema nas config  | Tema muda imediatamente               | Média      |

---

## 8. Métricas

- % de casos de teste executados  
- % de testes aprovados  
- Número de bugs encontrados por funcionalidade  
- Cobertura de testes unitários (meta: ≥ 80%)

---

## 9. Relatórios

- Relatório de Execução de Testes  
- Relatório de Bugs  
- Relatório de Cobertura  
- Planilha de Casos de Teste com status

---

## 10. Aprovação

| Nome           | Papel                   | Assinatura | Data       |
|----------------|-------------------------|------------|------------|
| Pedro Henrique | Responsável de Testes   | —          | 11/04/2025 |
| Juan Alfredo   | Desenvolvedor Revisor   | —          | 11/04/2025 |

