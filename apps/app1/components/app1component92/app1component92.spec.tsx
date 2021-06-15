import { render } from '@testing-library/react';

import App1component92 from './app1component92';

describe('App1component92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component92 />);
    expect(baseElement).toBeTruthy();
  });
});
