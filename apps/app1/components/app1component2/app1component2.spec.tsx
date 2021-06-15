import { render } from '@testing-library/react';

import App1component2 from './app1component2';

describe('App1component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component2 />);
    expect(baseElement).toBeTruthy();
  });
});
