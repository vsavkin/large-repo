import { render } from '@testing-library/react';

import App1component4 from './app1component4';

describe('App1component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component4 />);
    expect(baseElement).toBeTruthy();
  });
});
