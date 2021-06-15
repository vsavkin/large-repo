import { render } from '@testing-library/react';

import App7component25 from './app7component25';

describe('App7component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component25 />);
    expect(baseElement).toBeTruthy();
  });
});
