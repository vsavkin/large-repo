import { render } from '@testing-library/react';

import App20component1 from './app20component1';

describe('App20component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component1 />);
    expect(baseElement).toBeTruthy();
  });
});
