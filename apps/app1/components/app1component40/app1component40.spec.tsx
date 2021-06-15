import { render } from '@testing-library/react';

import App1component40 from './app1component40';

describe('App1component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component40 />);
    expect(baseElement).toBeTruthy();
  });
});
