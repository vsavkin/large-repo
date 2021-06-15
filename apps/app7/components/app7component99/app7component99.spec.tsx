import { render } from '@testing-library/react';

import App7component99 from './app7component99';

describe('App7component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component99 />);
    expect(baseElement).toBeTruthy();
  });
});
