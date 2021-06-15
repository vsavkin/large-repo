import { render } from '@testing-library/react';

import App11component17 from './app11component17';

describe('App11component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component17 />);
    expect(baseElement).toBeTruthy();
  });
});
