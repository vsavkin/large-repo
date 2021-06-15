import { render } from '@testing-library/react';

import App18component4 from './app18component4';

describe('App18component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component4 />);
    expect(baseElement).toBeTruthy();
  });
});
