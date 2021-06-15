import { render } from '@testing-library/react';

import App15component32 from './app15component32';

describe('App15component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component32 />);
    expect(baseElement).toBeTruthy();
  });
});
