import { render } from '@testing-library/react';

import App1component3 from './app1component3';

describe('App1component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component3 />);
    expect(baseElement).toBeTruthy();
  });
});
