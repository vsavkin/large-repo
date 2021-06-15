import { render } from '@testing-library/react';

import App13component70 from './app13component70';

describe('App13component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App13component70 />);
    expect(baseElement).toBeTruthy();
  });
});
