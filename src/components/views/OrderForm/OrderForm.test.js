import React from 'react';
import { shallow } from 'enzyme';
import { OrderFormComponent } from './OrderForm';

const mockProps = {
  products: [
    { name: 'a', photos: ['a', 'b'] },
    { name: 'b', photos: ['a', 'b'] },
  ],
  match: { params: { name: 'as' } },
};

describe('Component OrderForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderFormComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
