import { render } from '@testing-library/react';

import App4component70 from './app4component70';

describe('App4component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component70 />);
    expect(baseElement).toBeTruthy();
  });
});
