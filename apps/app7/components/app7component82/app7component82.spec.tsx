import { render } from '@testing-library/react';

import App7component82 from './app7component82';

describe('App7component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component82 />);
    expect(baseElement).toBeTruthy();
  });
});
