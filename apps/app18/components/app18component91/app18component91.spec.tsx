import { render } from '@testing-library/react';

import App18component91 from './app18component91';

describe('App18component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component91 />);
    expect(baseElement).toBeTruthy();
  });
});
