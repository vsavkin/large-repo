import { render } from '@testing-library/react';

import App7component50 from './app7component50';

describe('App7component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component50 />);
    expect(baseElement).toBeTruthy();
  });
});
