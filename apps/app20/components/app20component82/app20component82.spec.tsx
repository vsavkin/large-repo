import { render } from '@testing-library/react';

import App20component82 from './app20component82';

describe('App20component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component82 />);
    expect(baseElement).toBeTruthy();
  });
});
