import { render } from '@testing-library/react';

import App11component25 from './app11component25';

describe('App11component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component25 />);
    expect(baseElement).toBeTruthy();
  });
});
