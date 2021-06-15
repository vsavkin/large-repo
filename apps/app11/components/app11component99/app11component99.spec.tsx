import { render } from '@testing-library/react';

import App11component99 from './app11component99';

describe('App11component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component99 />);
    expect(baseElement).toBeTruthy();
  });
});
