import { render } from '@testing-library/react';

import App4component91 from './app4component91';

describe('App4component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component91 />);
    expect(baseElement).toBeTruthy();
  });
});
