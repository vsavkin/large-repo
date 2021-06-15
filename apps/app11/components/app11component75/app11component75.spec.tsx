import { render } from '@testing-library/react';

import App11component75 from './app11component75';

describe('App11component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component75 />);
    expect(baseElement).toBeTruthy();
  });
});
