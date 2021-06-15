import { render } from '@testing-library/react';

import App9component70 from './app9component70';

describe('App9component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component70 />);
    expect(baseElement).toBeTruthy();
  });
});
