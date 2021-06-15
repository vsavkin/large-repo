import { render } from '@testing-library/react';

import App11component20 from './app11component20';

describe('App11component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component20 />);
    expect(baseElement).toBeTruthy();
  });
});
