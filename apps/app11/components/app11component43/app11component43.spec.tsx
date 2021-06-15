import { render } from '@testing-library/react';

import App11component43 from './app11component43';

describe('App11component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component43 />);
    expect(baseElement).toBeTruthy();
  });
});
