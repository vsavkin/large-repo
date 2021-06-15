import { render } from '@testing-library/react';

import App11component81 from './app11component81';

describe('App11component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component81 />);
    expect(baseElement).toBeTruthy();
  });
});
