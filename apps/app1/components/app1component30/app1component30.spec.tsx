import { render } from '@testing-library/react';

import App1component30 from './app1component30';

describe('App1component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component30 />);
    expect(baseElement).toBeTruthy();
  });
});
