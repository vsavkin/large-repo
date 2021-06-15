import { render } from '@testing-library/react';

import App18component8 from './app18component8';

describe('App18component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component8 />);
    expect(baseElement).toBeTruthy();
  });
});
