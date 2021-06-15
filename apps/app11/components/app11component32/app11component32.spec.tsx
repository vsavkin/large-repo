import { render } from '@testing-library/react';

import App11component32 from './app11component32';

describe('App11component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component32 />);
    expect(baseElement).toBeTruthy();
  });
});
