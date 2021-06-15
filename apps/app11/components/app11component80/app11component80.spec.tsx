import { render } from '@testing-library/react';

import App11component80 from './app11component80';

describe('App11component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component80 />);
    expect(baseElement).toBeTruthy();
  });
});
