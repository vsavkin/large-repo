import { render } from '@testing-library/react';

import App7component14 from './app7component14';

describe('App7component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component14 />);
    expect(baseElement).toBeTruthy();
  });
});
