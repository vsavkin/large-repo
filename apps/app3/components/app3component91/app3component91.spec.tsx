import { render } from '@testing-library/react';

import App3component91 from './app3component91';

describe('App3component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component91 />);
    expect(baseElement).toBeTruthy();
  });
});
