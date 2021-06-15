import { render } from '@testing-library/react';

import App18component14 from './app18component14';

describe('App18component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component14 />);
    expect(baseElement).toBeTruthy();
  });
});
