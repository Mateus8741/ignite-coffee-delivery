import latte from '../../src/assets/coffes/Latte.svg'
import arabe from '../../src/assets/coffes/Arabe.svg'
import cubano from '../../src/assets/coffes/Cubano.svg'
import irlandes from '../../src/assets/coffes/Irlandes.svg'
import havaiano from '../../src/assets/coffes/Havaiano.svg'
import expresso from '../../src/assets/coffes/Expresso.svg'
import americano from '../../src/assets/coffes/Americano.svg'
import capuccino from '../../src/assets/coffes/Capuccino.svg'
import macchiato from '../../src/assets/coffes/Macchiato.svg'
import mocaccino from '../../src/assets/coffes/Mochaccino.svg'
import cafeGelado from '../../src/assets/coffes/CafeGelado.svg'
import cafeComLeite from '../../src/assets/coffes/CafeComLeite.svg'
import expressoCremoso from '../../src/assets/coffes/ExpressoCremoso.svg'
import chocolateQuente from '../../src/assets/coffes/ChocolateQuente.svg'

const dados = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    srcImg: expresso,
    price: 9.9,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    srcImg: americano,
    price: 9.9,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    srcImg: expressoCremoso,
    price: 9.9,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    srcImg: cafeGelado,
    price: 9.9,
  },
  {
    id: 5,
    title: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    srcImg: cafeComLeite,
    price: 9.9,
  },
  {
    id: 6,
    title: 'Latte',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso, com o dobro de leite e espuma cremosa',
    srcImg: latte,
    price: 9.9,
  },
  {
    id: 7,
    title: 'Capuccino',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    srcImg: capuccino,
    price: 9.9,
  },
  {
    id: 8,
    title: 'Macchiato',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    srcImg: macchiato,
    price: 9.9,
  },
  {
    id: 9,
    title: 'Mocaccino',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    srcImg: mocaccino,
    price: 9.9,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    tags: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    srcImg: chocolateQuente,
    price: 9.9,
  },
  {
    id: 11,
    title: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    srcImg: cubano,
    price: 9.9,
  },
  {
    id: 12,
    title: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    srcImg: havaiano,
    price: 9.9,
  },
  {
    id: 13,
    title: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    srcImg: arabe,
    price: 9.9,
  },
  {
    id: 14,
    title: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    srcImg: irlandes,
    price: 9.9,
  },
  {
    id: 15,
    title: 'Latte Vegano',
    tags: ['Especial', 'Vegano'],
    description:
      'Uma dose de café expresso com  leite de soja e espuma cremosa',
    srcImg: latte,
    price: 9.9,
  },
  {
    id: 16,
    title: 'Americano Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso americano e cubos de gelo',
    srcImg: americano,
    price: 9.9,
  },
]

export default dados
