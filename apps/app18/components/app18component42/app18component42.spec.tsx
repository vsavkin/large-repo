import { render } from '@testing-library/react';

import App18component42 from './app18component42';

describe('App18component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component42 />);
    expect(baseElement).toBeTruthy();
  });
});
