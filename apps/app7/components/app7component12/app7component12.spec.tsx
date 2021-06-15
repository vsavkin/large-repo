import { render } from '@testing-library/react';

import App7component12 from './app7component12';

describe('App7component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component12 />);
    expect(baseElement).toBeTruthy();
  });
});
