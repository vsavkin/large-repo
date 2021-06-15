import { render } from '@testing-library/react';

import App7component70 from './app7component70';

describe('App7component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component70 />);
    expect(baseElement).toBeTruthy();
  });
});
