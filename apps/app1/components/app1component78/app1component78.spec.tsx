import { render } from '@testing-library/react';

import App1component78 from './app1component78';

describe('App1component78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component78 />);
    expect(baseElement).toBeTruthy();
  });
});
