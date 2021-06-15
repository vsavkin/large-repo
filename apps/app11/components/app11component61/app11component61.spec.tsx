import { render } from '@testing-library/react';

import App11component61 from './app11component61';

describe('App11component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component61 />);
    expect(baseElement).toBeTruthy();
  });
});
