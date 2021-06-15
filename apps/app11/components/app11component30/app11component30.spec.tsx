import { render } from '@testing-library/react';

import App11component30 from './app11component30';

describe('App11component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component30 />);
    expect(baseElement).toBeTruthy();
  });
});
