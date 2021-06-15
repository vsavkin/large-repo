import { render } from '@testing-library/react';

import App15component90 from './app15component90';

describe('App15component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component90 />);
    expect(baseElement).toBeTruthy();
  });
});
