import { render } from '@testing-library/react';

import App20component26 from './app20component26';

describe('App20component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component26 />);
    expect(baseElement).toBeTruthy();
  });
});
