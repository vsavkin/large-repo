import { render } from '@testing-library/react';

import App15component75 from './app15component75';

describe('App15component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component75 />);
    expect(baseElement).toBeTruthy();
  });
});
