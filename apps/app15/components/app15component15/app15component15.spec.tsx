import { render } from '@testing-library/react';

import App15component15 from './app15component15';

describe('App15component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component15 />);
    expect(baseElement).toBeTruthy();
  });
});
