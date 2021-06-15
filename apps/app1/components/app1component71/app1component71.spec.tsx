import { render } from '@testing-library/react';

import App1component71 from './app1component71';

describe('App1component71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component71 />);
    expect(baseElement).toBeTruthy();
  });
});
