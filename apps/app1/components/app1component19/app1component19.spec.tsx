import { render } from '@testing-library/react';

import App1component19 from './app1component19';

describe('App1component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component19 />);
    expect(baseElement).toBeTruthy();
  });
});
