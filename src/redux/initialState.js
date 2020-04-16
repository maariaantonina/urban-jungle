export const initialState = {
  products: {
    data: [
      {
        _id: '1',
        name: 'Fancy plant',
        category: 'flowering',
        price: 10,
        isDiscount: true,
        discount: 10,
        photos: [
          'https://source.unsplash.com/collection/404339/1',
          'https://source.unsplash.com/collection/404339/2',
          'https://source.unsplash.com/collection/404339/3',
        ],
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, _id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
        height: 12,
      },
      {
        _id: '2',
        name: 'Fancy plant',
        category: 'cacti',
        price: 10,
        isDiscount: true,
        discount: 10,
        photos: [
          'https://source.unsplash.com/collection/404339/4',
          'https://source.unsplash.com/collection/404339/5',
          'https://source.unsplash.com/collection/404339/6',
        ],
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, _id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
        height: 12,
      },
      {
        _id: '3',
        name: 'Fancy plant',
        category: 'flowering',
        price: 10,
        isDiscount: true,
        discount: 10,
        photos: [
          'https://source.unsplash.com/collection/404339/7',
          'https://source.unsplash.com/collection/404339/8',
          'https://source.unsplash.com/collection/404339/9',
        ],
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, _id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
        height: 12,
      },
      {
        _id: '4',
        name: 'Fancy plant',
        category: 'suculents',
        price: 10,
        isDiscount: true,
        discount: 10,
        photos: [
          'https://source.unsplash.com/collection/404339/10',
          'https://source.unsplash.com/collection/404339/11',
          'https://source.unsplash.com/collection/404339/12',
        ],
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, _id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
        height: 12,
      },
      {
        _id: '5',
        name: 'Fancy plant',
        category: 'flowering',
        price: 10,
        isDiscount: true,
        discount: 10,
        photos: [
          'https://source.unsplash.com/collection/404339/13',
          'https://source.unsplash.com/collection/404339/14',
          'https://source.unsplash.com/collection/404339/15',
        ],
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, _id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
        height: 12,
      },
      {
        _id: '6',
        name: 'Fancy plant',
        category: 'flowering',
        price: 10,
        isDiscount: true,
        discount: 10,
        photos: [
          'https://source.unsplash.com/collection/404339/16',
          'https://source.unsplash.com/collection/404339/17',
          'https://source.unsplash.com/collection/404339/18',
        ],
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, _id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
        height: 12,
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    products: [],
  },
  categories: [
    'all',
    'succulents',
    'cacti',
    'flowering',
    'palms',
    'tillandsia',
  ],
};
