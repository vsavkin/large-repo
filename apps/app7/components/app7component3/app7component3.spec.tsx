import { render } from '@testing-library/react';

import App7component3 from './app7component3';

describe('App7component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component3 />);
    expect(baseElement).toBeTruthy();
  });
});
