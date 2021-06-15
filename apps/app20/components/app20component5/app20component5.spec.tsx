import { render } from '@testing-library/react';

import App20component5 from './app20component5';

describe('App20component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component5 />);
    expect(baseElement).toBeTruthy();
  });
});
