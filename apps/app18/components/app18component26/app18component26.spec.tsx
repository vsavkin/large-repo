import { render } from '@testing-library/react';

import App18component26 from './app18component26';

describe('App18component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component26 />);
    expect(baseElement).toBeTruthy();
  });
});
