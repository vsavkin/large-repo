import { render } from '@testing-library/react';

import App7component75 from './app7component75';

describe('App7component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component75 />);
    expect(baseElement).toBeTruthy();
  });
});
