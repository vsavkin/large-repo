import { render } from '@testing-library/react';

import App20component83 from './app20component83';

describe('App20component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component83 />);
    expect(baseElement).toBeTruthy();
  });
});
