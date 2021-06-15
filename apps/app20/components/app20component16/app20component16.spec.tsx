import { render } from '@testing-library/react';

import App20component16 from './app20component16';

describe('App20component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component16 />);
    expect(baseElement).toBeTruthy();
  });
});
