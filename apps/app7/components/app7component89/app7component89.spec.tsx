import { render } from '@testing-library/react';

import App7component89 from './app7component89';

describe('App7component89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component89 />);
    expect(baseElement).toBeTruthy();
  });
});
