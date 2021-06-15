import { render } from '@testing-library/react';

import App15component60 from './app15component60';

describe('App15component60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component60 />);
    expect(baseElement).toBeTruthy();
  });
});
