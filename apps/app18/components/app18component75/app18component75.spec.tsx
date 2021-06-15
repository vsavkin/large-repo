import { render } from '@testing-library/react';

import App18component75 from './app18component75';

describe('App18component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component75 />);
    expect(baseElement).toBeTruthy();
  });
});
