import { render } from '@testing-library/react';

import App5component83 from './app5component83';

describe('App5component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component83 />);
    expect(baseElement).toBeTruthy();
  });
});
