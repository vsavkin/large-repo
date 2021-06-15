import { render } from '@testing-library/react';

import App11component22 from './app11component22';

describe('App11component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component22 />);
    expect(baseElement).toBeTruthy();
  });
});
