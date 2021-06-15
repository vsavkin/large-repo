import { render } from '@testing-library/react';

import App7component42 from './app7component42';

describe('App7component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component42 />);
    expect(baseElement).toBeTruthy();
  });
});
