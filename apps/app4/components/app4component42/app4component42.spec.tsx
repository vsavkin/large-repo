import { render } from '@testing-library/react';

import App4component42 from './app4component42';

describe('App4component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component42 />);
    expect(baseElement).toBeTruthy();
  });
});
