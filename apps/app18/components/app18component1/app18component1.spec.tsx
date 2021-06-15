import { render } from '@testing-library/react';

import App18component1 from './app18component1';

describe('App18component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component1 />);
    expect(baseElement).toBeTruthy();
  });
});
