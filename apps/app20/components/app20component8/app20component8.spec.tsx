import { render } from '@testing-library/react';

import App20component8 from './app20component8';

describe('App20component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component8 />);
    expect(baseElement).toBeTruthy();
  });
});
