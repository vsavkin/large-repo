import { render } from '@testing-library/react';

import App17component70 from './app17component70';

describe('App17component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component70 />);
    expect(baseElement).toBeTruthy();
  });
});
