import { render } from '@testing-library/react';

import App18component23 from './app18component23';

describe('App18component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component23 />);
    expect(baseElement).toBeTruthy();
  });
});
