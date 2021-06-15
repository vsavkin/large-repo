import { render } from '@testing-library/react';

import App11component24 from './app11component24';

describe('App11component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App11component24 />);
    expect(baseElement).toBeTruthy();
  });
});
