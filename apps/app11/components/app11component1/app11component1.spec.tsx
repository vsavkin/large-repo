import { render } from '@testing-library/react';

import App11component1 from './app11component1';

describe('App11component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component1 />);
    expect(baseElement).toBeTruthy();
  });
});
