import { render } from '@testing-library/react';

import App7component13 from './app7component13';

describe('App7component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component13 />);
    expect(baseElement).toBeTruthy();
  });
});
