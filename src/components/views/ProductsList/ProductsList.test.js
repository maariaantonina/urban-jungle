import React from 'react';
import { shallow } from 'enzyme';
import { ProductsListComponent } from './ProductsList';

const mockProps = {
  products: [
    { name: 'a', photos: ['a', 'b'], category: 'name' },
    { name: 'b', photos: ['a', 'b'], category: 'name' },
  ],
  match: { params: { name: 'as' } },
  fetchProducts: jest.fn(),
};

describe('Component ProductsList', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsListComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
