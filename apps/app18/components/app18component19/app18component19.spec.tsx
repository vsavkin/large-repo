import { render } from '@testing-library/react';

import App18component19 from './app18component19';

describe('App18component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component19 />);
    expect(baseElement).toBeTruthy();
  });
});
