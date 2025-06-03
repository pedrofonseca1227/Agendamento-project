# História de Usuário: US001

## Título  
Criar lembrete com hora e data

---

## Narrativa  
**Como** usuário  
**Eu quero** criar um lembrete com título, data e hora  
**Para que** eu seja notificado no momento certo e não perca compromissos importantes

---

## Critérios de Aceitação
- O usuário pode inserir título, data e hora do lembrete
- O lembrete deve ser salvo localmente
- O lembrete aparece na visualização da agenda diária
- Uma notificação é programada para o horário especificado

---

## Detalhes Técnicos
- Utilizar `flutter_local_notifications` para agendamento
- Armazenar os dados do lembrete usando estrutura em memória (sem banco de dados por enquanto)
- Validação de campos obrigatórios: título e data/hora

---

## Dependências
- Nenhuma dependência direta
- Pode ser expandida posteriormente para incluir repetição e notificações com som

---

## Estimativa  
**3 Story Points**

---

## Prioridade  
**Must Have**

---

## Observações  
- A primeira funcionalidade essencial do MVP  
- Serve como base para testes e para outras histórias de lembrete

