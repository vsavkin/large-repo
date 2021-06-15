import { render } from '@testing-library/react';

import App15component43 from './app15component43';

describe('App15component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component43 />);
    expect(baseElement).toBeTruthy();
  });
});
