import { render } from '@testing-library/react';

import App15component1 from './app15component1';

describe('App15component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component1 />);
    expect(baseElement).toBeTruthy();
  });
});
