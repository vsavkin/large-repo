import { render } from '@testing-library/react';

import App3component70 from './app3component70';

describe('App3component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component70 />);
    expect(baseElement).toBeTruthy();
  });
});
