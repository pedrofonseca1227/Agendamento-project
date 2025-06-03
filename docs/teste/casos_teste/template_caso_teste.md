# ✅ Caso de Teste: CT01

---

## Título  
Criar lembrete com data e hora válidas

---

## Objetivo  
Verificar se o sistema permite criar um lembrete com data e hora válidas, salvando corretamente e agendando a notificação.

---

## Requisitos/Histórias Relacionados  
- RF01 – Criar lembrete com data e hora  
- RF04 – Enviar notificação na hora marcada  
- US001 – Como usuário, eu quero criar lembretes para não esquecer compromissos

---

## Pré-condições  
- O aplicativo *Agenda Pro* deve estar instalado  
- O usuário deve estar com o app aberto e permissões de notificação habilitadas

---

## Dados de Teste  

| Campo        | Valor                     |
|--------------|---------------------------|
| Título       | "Reunião com equipe"      |
| Data         | 12/04/2025                |
| Hora         | 14:00                     |

---

## Passos

1. Abrir o app Agenda Pro  
2. Clicar no botão "Novo Lembrete"  
3. Preencher o título com "Reunião com equipe"  
4. Selecionar a data: 12/04/2025  
5. Selecionar a hora: 14:00  
6. Salvar o lembrete  
7. Aguardar o horário agendado

---

## Resultado Esperado  
- O lembrete é exibido na visualização da agenda para o dia 12/04/2025  
- Uma notificação é enviada ao usuário exatamente às 14:00 com o texto do lembrete

---

## Pós-condições  
- O lembrete deve permanecer salvo após o envio da notificação  
- O usuário pode editar ou excluir o lembrete posteriormente

---

## Tipo de Teste  
**Aceitação**

---

## Automação  
**Manual**

---

## Prioridade  
**Alta**

---

## Observações  
- Caso o sistema esteja em segundo plano, a notificação ainda deve ser exibida.  
- Testar também com o celular em modo economia de energia.

