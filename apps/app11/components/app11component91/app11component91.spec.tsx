import { render } from '@testing-library/react';

import App11component91 from './app11component91';

describe('App11component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component91 />);
    expect(baseElement).toBeTruthy();
  });
});
