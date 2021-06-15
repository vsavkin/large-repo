import { render } from '@testing-library/react';

import App18component50 from './app18component50';

describe('App18component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component50 />);
    expect(baseElement).toBeTruthy();
  });
});
