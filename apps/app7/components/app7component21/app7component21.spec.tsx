import { render } from '@testing-library/react';

import App7component21 from './app7component21';

describe('App7component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component21 />);
    expect(baseElement).toBeTruthy();
  });
});
