import { render } from '@testing-library/react';

import App11component10 from './app11component10';

describe('App11component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component10 />);
    expect(baseElement).toBeTruthy();
  });
});
