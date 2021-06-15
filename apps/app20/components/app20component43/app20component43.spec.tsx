import { render } from '@testing-library/react';

import App20component43 from './app20component43';

describe('App20component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component43 />);
    expect(baseElement).toBeTruthy();
  });
});
