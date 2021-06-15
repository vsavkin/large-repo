import { render } from '@testing-library/react';

import App11component16 from './app11component16';

describe('App11component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component16 />);
    expect(baseElement).toBeTruthy();
  });
});
