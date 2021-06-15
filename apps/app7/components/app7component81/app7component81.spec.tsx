import { render } from '@testing-library/react';

import App7component81 from './app7component81';

describe('App7component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component81 />);
    expect(baseElement).toBeTruthy();
  });
});
