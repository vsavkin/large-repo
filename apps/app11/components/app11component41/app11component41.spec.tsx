import { render } from '@testing-library/react';

import App11component41 from './app11component41';

describe('App11component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component41 />);
    expect(baseElement).toBeTruthy();
  });
});
