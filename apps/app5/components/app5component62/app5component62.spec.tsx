import { render } from '@testing-library/react';

import App5component62 from './app5component62';

describe('App5component62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component62 />);
    expect(baseElement).toBeTruthy();
  });
});
