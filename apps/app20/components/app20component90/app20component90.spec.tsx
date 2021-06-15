import { render } from '@testing-library/react';

import App20component90 from './app20component90';

describe('App20component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component90 />);
    expect(baseElement).toBeTruthy();
  });
});
