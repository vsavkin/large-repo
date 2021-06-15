import { render } from '@testing-library/react';

import App2component70 from './app2component70';

describe('App2component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component70 />);
    expect(baseElement).toBeTruthy();
  });
});
