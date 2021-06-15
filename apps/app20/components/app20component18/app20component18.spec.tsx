import { render } from '@testing-library/react';

import App20component18 from './app20component18';

describe('App20component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component18 />);
    expect(baseElement).toBeTruthy();
  });
});
