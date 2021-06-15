import { render } from '@testing-library/react';

import App18component11 from './app18component11';

describe('App18component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component11 />);
    expect(baseElement).toBeTruthy();
  });
});
