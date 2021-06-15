import { render } from '@testing-library/react';

import App1component96 from './app1component96';

describe('App1component96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component96 />);
    expect(baseElement).toBeTruthy();
  });
});
