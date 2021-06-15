import { render } from '@testing-library/react';

import App17component42 from './app17component42';

describe('App17component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App17component42 />);
    expect(baseElement).toBeTruthy();
  });
});
