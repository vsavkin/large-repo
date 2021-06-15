import { render } from '@testing-library/react';

import App7component1 from './app7component1';

describe('App7component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component1 />);
    expect(baseElement).toBeTruthy();
  });
});
