import { render } from '@testing-library/react';

import App1component70 from './app1component70';

describe('App1component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component70 />);
    expect(baseElement).toBeTruthy();
  });
});
