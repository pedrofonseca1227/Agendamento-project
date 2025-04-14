document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeCliente = document.getElementById('nomeCliente').value;
    const dataHora = document.getElementById('dataHora').value;
    const servico = document.getElementById('servico').value;

    const agendamento = {
        nomeCliente: nomeCliente,
        dataHora: dataHora,
        servico: servico
    };

    fetch('http://localhost:5000/api/agendamento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(agendamento)
    })
    .then(response => response.json())
    .then(data => {
        alert('Agendamento realizado com sucesso!');
    })
    .catch(error => {
        alert('Erro ao agendar: ' + error);
    });
});
