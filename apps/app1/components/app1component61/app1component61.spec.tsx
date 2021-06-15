import { render } from '@testing-library/react';

import App1component61 from './app1component61';

describe('App1component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component61 />);
    expect(baseElement).toBeTruthy();
  });
});
