// 7 – Prioridade na fila

let filaAtendimento = [
    "cliente 003",
    "cliente 004",
    "cliente 005",
    "cliente 006",
    "cliente 007"
  ];
  
  filaAtendimento.unshift(`cliente VIP 1 `, `cliente VIP 2`)

console.log(`Depois de da prioridade aos clientes VIPs: ${filaAtendimento}`);