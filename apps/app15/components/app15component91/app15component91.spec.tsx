import { render } from '@testing-library/react';

import App15component91 from './app15component91';

describe('App15component91', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component91 />);
    expect(baseElement).toBeTruthy();
  });
});
