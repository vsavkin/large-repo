import { render } from '@testing-library/react';

import App1component45 from './app1component45';

describe('App1component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component45 />);
    expect(baseElement).toBeTruthy();
  });
});
