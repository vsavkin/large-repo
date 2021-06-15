import { render } from '@testing-library/react';

import App11component5 from './app11component5';

describe('App11component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component5 />);
    expect(baseElement).toBeTruthy();
  });
});
