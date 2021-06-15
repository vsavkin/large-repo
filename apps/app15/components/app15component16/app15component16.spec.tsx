import { render } from '@testing-library/react';

import App15component16 from './app15component16';

describe('App15component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component16 />);
    expect(baseElement).toBeTruthy();
  });
});
