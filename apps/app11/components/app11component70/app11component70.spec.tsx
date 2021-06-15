import { render } from '@testing-library/react';

import App11component70 from './app11component70';

describe('App11component70', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component70 />);
    expect(baseElement).toBeTruthy();
  });
});
