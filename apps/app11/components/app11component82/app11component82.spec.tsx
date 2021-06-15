import { render } from '@testing-library/react';

import App11component82 from './app11component82';

describe('App11component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component82 />);
    expect(baseElement).toBeTruthy();
  });
});
