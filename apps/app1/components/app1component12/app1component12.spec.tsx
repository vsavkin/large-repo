import { render } from '@testing-library/react';

import App1component12 from './app1component12';

describe('App1component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component12 />);
    expect(baseElement).toBeTruthy();
  });
});
