import { render } from '@testing-library/react';

import App16component70 from './app16component70';

describe('App16component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component70 />);
    expect(baseElement).toBeTruthy();
  });
});
