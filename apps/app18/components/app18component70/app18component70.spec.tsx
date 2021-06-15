import { render } from '@testing-library/react';

import App18component70 from './app18component70';

describe('App18component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component70 />);
    expect(baseElement).toBeTruthy();
  });
});
