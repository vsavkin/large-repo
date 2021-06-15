import { render } from '@testing-library/react';

import App6component42 from './app6component42';

describe('App6component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App6component42 />);
    expect(baseElement).toBeTruthy();
  });
});
