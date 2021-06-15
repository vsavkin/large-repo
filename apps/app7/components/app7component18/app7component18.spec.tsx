import { render } from '@testing-library/react';

import App7component18 from './app7component18';

describe('App7component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component18 />);
    expect(baseElement).toBeTruthy();
  });
});
