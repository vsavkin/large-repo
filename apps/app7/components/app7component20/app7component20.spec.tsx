import { render } from '@testing-library/react';

import App7component20 from './app7component20';

describe('App7component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component20 />);
    expect(baseElement).toBeTruthy();
  });
});
