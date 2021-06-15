import { render } from '@testing-library/react';

import App20component32 from './app20component32';

describe('App20component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component32 />);
    expect(baseElement).toBeTruthy();
  });
});
