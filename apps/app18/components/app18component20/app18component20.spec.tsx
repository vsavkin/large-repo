import { render } from '@testing-library/react';

import App18component20 from './app18component20';

describe('App18component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component20 />);
    expect(baseElement).toBeTruthy();
  });
});
