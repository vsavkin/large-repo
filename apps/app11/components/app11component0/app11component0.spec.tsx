import { render } from '@testing-library/react';

import App11component0 from './app11component0';

describe('App11component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component0 />);
    expect(baseElement).toBeTruthy();
  });
});
