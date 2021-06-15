import { render } from '@testing-library/react';

import App7component11 from './app7component11';

describe('App7component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component11 />);
    expect(baseElement).toBeTruthy();
  });
});
