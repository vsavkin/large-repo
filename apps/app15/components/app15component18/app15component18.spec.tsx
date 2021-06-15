import { render } from '@testing-library/react';

import App15component18 from './app15component18';

describe('App15component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component18 />);
    expect(baseElement).toBeTruthy();
  });
});
