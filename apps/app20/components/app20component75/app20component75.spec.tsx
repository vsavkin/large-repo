import { render } from '@testing-library/react';

import App20component75 from './app20component75';

describe('App20component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component75 />);
    expect(baseElement).toBeTruthy();
  });
});
