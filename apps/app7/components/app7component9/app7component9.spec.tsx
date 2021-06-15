import { render } from '@testing-library/react';

import App7component9 from './app7component9';

describe('App7component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component9 />);
    expect(baseElement).toBeTruthy();
  });
});
