import { render } from '@testing-library/react';

import App7component43 from './app7component43';

describe('App7component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component43 />);
    expect(baseElement).toBeTruthy();
  });
});
