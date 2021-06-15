import { render } from '@testing-library/react';

import App20component80 from './app20component80';

describe('App20component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component80 />);
    expect(baseElement).toBeTruthy();
  });
});
