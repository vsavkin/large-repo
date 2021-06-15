import { render } from '@testing-library/react';

import App11component15 from './app11component15';

describe('App11component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component15 />);
    expect(baseElement).toBeTruthy();
  });
});
