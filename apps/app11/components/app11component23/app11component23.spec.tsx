import { render } from '@testing-library/react';

import App11component23 from './app11component23';

describe('App11component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component23 />);
    expect(baseElement).toBeTruthy();
  });
});
