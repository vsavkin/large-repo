import { render } from '@testing-library/react';

import App15component77 from './app15component77';

describe('App15component77', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component77 />);
    expect(baseElement).toBeTruthy();
  });
});
