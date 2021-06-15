import { render } from '@testing-library/react';

import App20component70 from './app20component70';

describe('App20component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component70 />);
    expect(baseElement).toBeTruthy();
  });
});
