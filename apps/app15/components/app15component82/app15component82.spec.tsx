import { render } from '@testing-library/react';

import App15component82 from './app15component82';

describe('App15component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component82 />);
    expect(baseElement).toBeTruthy();
  });
});
