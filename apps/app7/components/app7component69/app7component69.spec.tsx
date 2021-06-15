import { render } from '@testing-library/react';

import App7component69 from './app7component69';

describe('App7component69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component69 />);
    expect(baseElement).toBeTruthy();
  });
});
