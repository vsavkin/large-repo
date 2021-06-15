import { render } from '@testing-library/react';

import App15component99 from './app15component99';

describe('App15component99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component99 />);
    expect(baseElement).toBeTruthy();
  });
});
