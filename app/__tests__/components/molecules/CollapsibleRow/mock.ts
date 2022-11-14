import { parseISO } from 'date-fns'

const mockData = {
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
    {
      id: 42,
      date: parseISO('2022-01-15T22:20:30.000Z'),
      description: 'CURSO DE BEM-ESTAR',
      value: 500,
      seller: 'JOSE CARLOS',
      type: {
        id: 1,
        descriptions: 'Comissão paga',
        nature: 'Saida',
        signal: false,
      },
    },
  ],
}

export default mockData
