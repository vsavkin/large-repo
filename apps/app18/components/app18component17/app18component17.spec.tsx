import { render } from '@testing-library/react';

import App18component17 from './app18component17';

describe('App18component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component17 />);
    expect(baseElement).toBeTruthy();
  });
});
