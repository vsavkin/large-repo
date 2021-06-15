import { render } from '@testing-library/react';

import App18component80 from './app18component80';

describe('App18component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component80 />);
    expect(baseElement).toBeTruthy();
  });
});
