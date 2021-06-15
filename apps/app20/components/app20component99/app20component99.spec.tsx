import { render } from '@testing-library/react';

import App20component99 from './app20component99';

describe('App20component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component99 />);
    expect(baseElement).toBeTruthy();
  });
});
