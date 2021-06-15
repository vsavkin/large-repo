import { render } from '@testing-library/react';

import App7component6 from './app7component6';

describe('App7component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component6 />);
    expect(baseElement).toBeTruthy();
  });
});
