import { render } from '@testing-library/react';

import App15component9 from './app15component9';

describe('App15component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component9 />);
    expect(baseElement).toBeTruthy();
  });
});
