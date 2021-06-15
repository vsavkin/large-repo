import { render } from '@testing-library/react';

import App11component64 from './app11component64';

describe('App11component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component64 />);
    expect(baseElement).toBeTruthy();
  });
});
