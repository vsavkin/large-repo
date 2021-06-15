import { render } from '@testing-library/react';

import App11component42 from './app11component42';

describe('App11component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component42 />);
    expect(baseElement).toBeTruthy();
  });
});
