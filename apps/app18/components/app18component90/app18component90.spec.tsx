import { render } from '@testing-library/react';

import App18component90 from './app18component90';

describe('App18component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component90 />);
    expect(baseElement).toBeTruthy();
  });
});
