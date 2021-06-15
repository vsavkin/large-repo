import { render } from '@testing-library/react';

import App8component42 from './app8component42';

describe('App8component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component42 />);
    expect(baseElement).toBeTruthy();
  });
});
