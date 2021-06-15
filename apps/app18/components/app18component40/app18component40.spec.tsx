import { render } from '@testing-library/react';

import App18component40 from './app18component40';

describe('App18component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component40 />);
    expect(baseElement).toBeTruthy();
  });
});
