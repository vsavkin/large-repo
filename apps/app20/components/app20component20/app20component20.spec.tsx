import { render } from '@testing-library/react';

import App20component20 from './app20component20';

describe('App20component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component20 />);
    expect(baseElement).toBeTruthy();
  });
});
