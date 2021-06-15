import { render } from '@testing-library/react';

import App9component91 from './app9component91';

describe('App9component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component91 />);
    expect(baseElement).toBeTruthy();
  });
});
