import { render } from '@testing-library/react';

import App12component70 from './app12component70';

describe('App12component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component70 />);
    expect(baseElement).toBeTruthy();
  });
});
