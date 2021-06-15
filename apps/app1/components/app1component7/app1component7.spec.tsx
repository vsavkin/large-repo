import { render } from '@testing-library/react';

import App1component7 from './app1component7';

describe('App1component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component7 />);
    expect(baseElement).toBeTruthy();
  });
});
