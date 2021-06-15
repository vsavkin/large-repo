import { render } from '@testing-library/react';

import App20component25 from './app20component25';

describe('App20component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App20component25 />);
    expect(baseElement).toBeTruthy();
  });
});
