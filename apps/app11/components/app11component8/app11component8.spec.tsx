import { render } from '@testing-library/react';

import App11component8 from './app11component8';

describe('App11component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component8 />);
    expect(baseElement).toBeTruthy();
  });
});
