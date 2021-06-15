import { render } from '@testing-library/react';

import App11component9 from './app11component9';

describe('App11component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component9 />);
    expect(baseElement).toBeTruthy();
  });
});
