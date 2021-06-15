import { render } from '@testing-library/react';

import App11component18 from './app11component18';

describe('App11component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component18 />);
    expect(baseElement).toBeTruthy();
  });
});
