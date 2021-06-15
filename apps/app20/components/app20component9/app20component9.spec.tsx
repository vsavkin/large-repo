import { render } from '@testing-library/react';

import App20component9 from './app20component9';

describe('App20component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component9 />);
    expect(baseElement).toBeTruthy();
  });
});
