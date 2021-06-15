import { render } from '@testing-library/react';

import App7component32 from './app7component32';

describe('App7component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component32 />);
    expect(baseElement).toBeTruthy();
  });
});
