import { render } from '@testing-library/react';

import App15component70 from './app15component70';

describe('App15component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component70 />);
    expect(baseElement).toBeTruthy();
  });
});
