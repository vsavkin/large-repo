import { render } from '@testing-library/react';

import App15component26 from './app15component26';

describe('App15component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component26 />);
    expect(baseElement).toBeTruthy();
  });
});
