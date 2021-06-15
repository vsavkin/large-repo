import { render } from '@testing-library/react';

import App5component70 from './app5component70';

describe('App5component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component70 />);
    expect(baseElement).toBeTruthy();
  });
});
