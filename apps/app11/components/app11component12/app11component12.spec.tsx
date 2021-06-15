import { render } from '@testing-library/react';

import App11component12 from './app11component12';

describe('App11component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component12 />);
    expect(baseElement).toBeTruthy();
  });
});
