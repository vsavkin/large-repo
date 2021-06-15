import { render } from '@testing-library/react';

import App11component6 from './app11component6';

describe('App11component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component6 />);
    expect(baseElement).toBeTruthy();
  });
});
