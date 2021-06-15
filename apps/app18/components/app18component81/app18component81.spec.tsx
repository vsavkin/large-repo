import { render } from '@testing-library/react';

import App18component81 from './app18component81';

describe('App18component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component81 />);
    expect(baseElement).toBeTruthy();
  });
});
