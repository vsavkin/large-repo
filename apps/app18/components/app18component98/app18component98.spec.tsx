import { render } from '@testing-library/react';

import App18component98 from './app18component98';

describe('App18component98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component98 />);
    expect(baseElement).toBeTruthy();
  });
});
