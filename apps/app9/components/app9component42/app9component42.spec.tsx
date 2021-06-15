import { render } from '@testing-library/react';

import App9component42 from './app9component42';

describe('App9component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component42 />);
    expect(baseElement).toBeTruthy();
  });
});
