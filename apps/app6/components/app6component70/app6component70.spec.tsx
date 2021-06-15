import { render } from '@testing-library/react';

import App6component70 from './app6component70';

describe('App6component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component70 />);
    expect(baseElement).toBeTruthy();
  });
});
