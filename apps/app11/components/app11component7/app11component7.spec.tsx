import { render } from '@testing-library/react';

import App11component7 from './app11component7';

describe('App11component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component7 />);
    expect(baseElement).toBeTruthy();
  });
});
