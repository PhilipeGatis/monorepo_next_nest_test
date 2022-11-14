import { parseISO } from 'date-fns'

const mockData = [
  {
    title: 'CURSO DE BEM-ESTAR',
    list: [
      {
        id: 21,
        date: parseISO('2022-01-15T22:20:30.000Z'),
        description: 'CURSO DE BEM-ESTAR',
        value: 12750,
        seller: 'JOSE CARLOS',
        type: {
          id: 1,
          descriptions: 'Venda produtor',
          nature: 'Entrada',
          signal: true,
        },
      },
      {
        id: 41,
        date: parseISO('2022-01-15T22:20:30.000Z'),
        description: 'CURSO DE BEM-ESTAR',
        value: 12750,
        seller: 'JOSE CARLOS',
        type: {
          id: 1,
          descriptions: 'Venda produtor',
          nature: 'Entrada',
          signal: true,
        },
      },
    ],
  },
  {
    title: 'DOMINANDO INVESTIMENTOS',
    list: [
      {
        id: 22,
        date: parseISO('2021-12-03T14:46:02.000Z'),
        description: 'DOMINANDO INVESTIMENTOS',
        value: 50000,
        seller: 'MARIA CANDIDA',
        type: {
          id: 1,
          descriptions: 'Venda produtor',
          nature: 'Entrada',
          signal: true,
        },
      },
      {
        id: 42,
        date: parseISO('2021-12-03T14:46:02.000Z'),
        description: 'DOMINANDO INVESTIMENTOS',
        value: 50000,
        seller: 'MARIA CANDIDA',
        type: {
          id: 1,
          descriptions: 'Venda produtor',
          nature: 'Entrada',
          signal: true,
        },
      },
    ],
  },
  {
    title: 'DESENVOLVEDOR FULL STACK',
    list: [
      {
        id: 40,
        date: parseISO('2022-03-03T16:12:16.000Z'),
        description: 'DESENVOLVEDOR FULL STACK',
        value: 155000,
        seller: 'ELIANA NOGUEIRA',
        type: {
          id: 1,
          descriptions: 'Venda produtor',
          nature: 'Entrada',
          signal: true,
        },
      },
      {
        id: 100,
        date: parseISO('2022-03-03T16:12:16.000Z'),
        description: 'DESENVOLVEDOR FULL STACK',
        value: 155000,
        seller: 'ELIANA NOGUEIRA',
        type: {
          id: 1,
          descriptions: 'Venda produtor',
          nature: 'Entrada',
          signal: true,
        },
      },
    ],
  },
]

export default mockData
