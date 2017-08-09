// 模拟数据;
export class Hero {
  id = 0;
  name = '';
  addresses: Address[];
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    addresses: [
      {street: '123 Main', city: 'Anyway', state: 'CA', zip: '94801'},
      {street: '456 Waple', city: 'Somewhere', state: 'VA', zip: '23226'}
    ]
  }, {
    id: 2,
    name: 'Bombastic',
    addresses: [
      {street: '789 Elm', city: 'SmallVille', state: 'OH', zip: '04501'}
    ]
  }, {
    id: 3,
    name: 'Maneta',
    addresses: []
  }
]

export const states = ['CA', 'MD', 'OH', 'VA'];
