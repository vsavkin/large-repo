import { render } from '@testing-library/react';

import App20component17 from './app20component17';

describe('App20component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component17 />);
    expect(baseElement).toBeTruthy();
  });
});
