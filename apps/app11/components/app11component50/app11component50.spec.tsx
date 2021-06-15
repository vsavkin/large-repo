import { render } from '@testing-library/react';

import App11component50 from './app11component50';

describe('App11component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component50 />);
    expect(baseElement).toBeTruthy();
  });
});
