import { render } from '@testing-library/react';

import App20component91 from './app20component91';

describe('App20component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component91 />);
    expect(baseElement).toBeTruthy();
  });
});
