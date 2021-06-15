import { render } from '@testing-library/react';

import App7component4 from './app7component4';

describe('App7component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component4 />);
    expect(baseElement).toBeTruthy();
  });
});
