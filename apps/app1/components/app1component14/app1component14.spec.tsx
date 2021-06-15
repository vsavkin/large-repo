import { render } from '@testing-library/react';

import App1component14 from './app1component14';

describe('App1component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component14 />);
    expect(baseElement).toBeTruthy();
  });
});
