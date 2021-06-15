import { render } from '@testing-library/react';

import App7component5 from './app7component5';

describe('App7component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component5 />);
    expect(baseElement).toBeTruthy();
  });
});
