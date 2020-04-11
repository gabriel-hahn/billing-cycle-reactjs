import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import BarChart from '../../components/BarChart';

let wrapper: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow(<BarChart />);
});

afterEach(() => {
  wrapper.unmount();
});

describe('Barchart component', () => {
  describe('Smoke tests', () => {
    it('Should render the BarChart component correctly', () => {
      expect(wrapper.exists());
    });
  });

  describe('Events and data', () => {
    it('Should render correct data from API + chart configuration', () => {

    });
  });
});
