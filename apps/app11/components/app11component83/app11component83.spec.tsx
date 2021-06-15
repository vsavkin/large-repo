import { render } from '@testing-library/react';

import App11component83 from './app11component83';

describe('App11component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component83 />);
    expect(baseElement).toBeTruthy();
  });
});
