const Modal = {
  open() {
    //abrir modal
    //adicionar a classe active ao modal
    document
      .querySelector('.modal-overlay')
      .classList
      .add('active')
  },
  close() {
    //fechar o modal
    //preciso remover a class active modal
    document
      .querySelector('.modal-overlay')
      .classList
      .remove('active')
  }
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021',
  },
  {
    id: 2,
    description: 'Website',
    amount: 500000,
    date: '23/01/2021',
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021',
  },
]
//Eu preciso somar as entradas
//depois eu preciso somar as saídas e
//remover das entradas
//assim, eu terei o total


const Transaction = {
  incomes() {
    //somar as entradas
  },
  expenses() {
    //somar as saídas
  },
  total() {
    //entradas - saídas
  }
}

const DOM = {

  addTransaction(transaction, index) {
    console.log(transaction)
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransction(transaction)

    console.log(tr.innerHTML)
  },

  innerHTMLTransction(transaction) {
    const html = `

      <td class="description">${transaction.description}</td>
      <td class="expense">${transaction.amount}</td>
      <td class="date">${transaction.date}</td>
      <th><img src="./assets//minus.svg" alt="remover a transação"></th>
    </tr>
    `

    return html
  }
}

DOM.addTransaction(transactions[2])