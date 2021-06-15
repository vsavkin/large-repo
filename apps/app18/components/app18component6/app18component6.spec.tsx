import { render } from '@testing-library/react';

import App18component6 from './app18component6';

describe('App18component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component6 />);
    expect(baseElement).toBeTruthy();
  });
});
