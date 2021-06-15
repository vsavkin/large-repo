import { render } from '@testing-library/react';

import App18component25 from './app18component25';

describe('App18component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component25 />);
    expect(baseElement).toBeTruthy();
  });
});
