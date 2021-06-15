import { render } from '@testing-library/react';

import App1component13 from './app1component13';

describe('App1component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component13 />);
    expect(baseElement).toBeTruthy();
  });
});
