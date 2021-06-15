import { render } from '@testing-library/react';

import App18component64 from './app18component64';

describe('App18component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component64 />);
    expect(baseElement).toBeTruthy();
  });
});
