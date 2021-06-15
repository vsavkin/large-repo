import { render } from '@testing-library/react';

import App15component80 from './app15component80';

describe('App15component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component80 />);
    expect(baseElement).toBeTruthy();
  });
});
