import { render } from '@testing-library/react';

import App18component2 from './app18component2';

describe('App18component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component2 />);
    expect(baseElement).toBeTruthy();
  });
});
