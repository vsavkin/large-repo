import { render } from '@testing-library/react';

import App7component16 from './app7component16';

describe('App7component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component16 />);
    expect(baseElement).toBeTruthy();
  });
});
