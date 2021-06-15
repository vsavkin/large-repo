import { render } from '@testing-library/react';

import App11component11 from './app11component11';

describe('App11component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component11 />);
    expect(baseElement).toBeTruthy();
  });
});
