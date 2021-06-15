import { render } from '@testing-library/react';

import App20component65 from './app20component65';

describe('App20component65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component65 />);
    expect(baseElement).toBeTruthy();
  });
});
