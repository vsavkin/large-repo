import { render } from '@testing-library/react';

import App7component8 from './app7component8';

describe('App7component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component8 />);
    expect(baseElement).toBeTruthy();
  });
});
