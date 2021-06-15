import { render } from '@testing-library/react';

import App11component77 from './app11component77';

describe('App11component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component77 />);
    expect(baseElement).toBeTruthy();
  });
});
