import { render } from '@testing-library/react';

import App7component77 from './app7component77';

describe('App7component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component77 />);
    expect(baseElement).toBeTruthy();
  });
});
