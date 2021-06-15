import { render } from '@testing-library/react';

import App15component81 from './app15component81';

describe('App15component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component81 />);
    expect(baseElement).toBeTruthy();
  });
});
