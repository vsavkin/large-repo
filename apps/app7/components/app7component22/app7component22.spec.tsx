import { render } from '@testing-library/react';

import App7component22 from './app7component22';

describe('App7component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component22 />);
    expect(baseElement).toBeTruthy();
  });
});
