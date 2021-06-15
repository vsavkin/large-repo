import { render } from '@testing-library/react';

import App15component20 from './app15component20';

describe('App15component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component20 />);
    expect(baseElement).toBeTruthy();
  });
});
