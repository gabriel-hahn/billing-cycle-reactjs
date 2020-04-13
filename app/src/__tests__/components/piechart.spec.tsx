import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import PieChart from '../../components/PieChart';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<PieChart />);
});

afterEach(() => {
  wrapper.unmount();
});

describe('PieChart component', () => {
  describe('Smoke tests', () => {
    it('Should render the PieChart component correctly', () => {
      expect(wrapper.exists());
    });

    it('Should render loading when data is not done', () => {
      expect(wrapper.find('Loading').length).toEqual(1);
    });
  });
});
