export const initialState = {
  products: {
    data: [
      {
        id: 1,
        name: 'Fancy plant',
        category: 'flowering',
        price: 10,
        isDiscount: true,
        discount: 10,
        photo: 'https://source.unsplash.com/collection/404339/1',
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
        height: 12,
      },
      {
        id: 2,
        name: 'Fancy plant',
        category: 'cacti',
        price: 10,
        isDiscount: true,
        discount: 10,
        photo: 'https://source.unsplash.com/collection/404339/2',
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
        height: 12,
      },
      {
        id: 3,
        name: 'Fancy plant',
        category: 'flowering',
        price: 10,
        isDiscount: true,
        discount: 10,
        photo: 'https://source.unsplash.com/collection/404339/3',
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
        height: 12,
      },
      {
        id: 4,
        name: 'Fancy plant',
        category: 'suculents',
        price: 10,
        isDiscount: true,
        discount: 10,
        photo: 'https://source.unsplash.com/collection/404339/4',
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
        height: 12,
      },
      {
        id: 5,
        name: 'Fancy plant',
        category: 'flowering',
        price: 10,
        isDiscount: true,
        discount: 10,
        photo: 'https://source.unsplash.com/collection/404339/5',
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
        height: 12,
      },
      {
        id: 6,
        name: 'Fancy plant',
        category: 'flowering',
        price: 10,
        isDiscount: true,
        discount: 10,
        photo: 'https://source.unsplash.com/collection/404339/6',
        description:
          'Integer laoreet consequat neque, vel viverra ligula molestie non. In tempor, augue et molestie malesuada, lectus ipsum elementum eros, id interdum erat mauris nec turpis. Nam eget lectus vel urna mollis facilisis. Praesent non tempus turpis, ut pretium ex.',
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
  categories: ['succulents', 'cacti', 'flowering', 'palms'],
};
