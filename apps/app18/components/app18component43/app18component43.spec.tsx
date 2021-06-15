import { render } from '@testing-library/react';

import App18component43 from './app18component43';

describe('App18component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component43 />);
    expect(baseElement).toBeTruthy();
  });
});
