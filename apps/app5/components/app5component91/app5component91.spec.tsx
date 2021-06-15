import { render } from '@testing-library/react';

import App5component91 from './app5component91';

describe('App5component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component91 />);
    expect(baseElement).toBeTruthy();
  });
});
