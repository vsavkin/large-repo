import { render } from '@testing-library/react';

import App18component41 from './app18component41';

describe('App18component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component41 />);
    expect(baseElement).toBeTruthy();
  });
});
