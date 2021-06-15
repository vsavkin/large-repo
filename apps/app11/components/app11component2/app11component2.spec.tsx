import { render } from '@testing-library/react';

import App11component2 from './app11component2';

describe('App11component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component2 />);
    expect(baseElement).toBeTruthy();
  });
});
