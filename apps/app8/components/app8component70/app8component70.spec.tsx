import { render } from '@testing-library/react';

import App8component70 from './app8component70';

describe('App8component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component70 />);
    expect(baseElement).toBeTruthy();
  });
});
