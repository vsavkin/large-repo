import { render } from '@testing-library/react';

import App15component83 from './app15component83';

describe('App15component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component83 />);
    expect(baseElement).toBeTruthy();
  });
});
