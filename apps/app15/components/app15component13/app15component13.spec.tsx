import { render } from '@testing-library/react';

import App15component13 from './app15component13';

describe('App15component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component13 />);
    expect(baseElement).toBeTruthy();
  });
});
