import { render } from '@testing-library/react';

import App1component10 from './app1component10';

describe('App1component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component10 />);
    expect(baseElement).toBeTruthy();
  });
});
