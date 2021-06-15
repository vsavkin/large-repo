import { render } from '@testing-library/react';

import App15component8 from './app15component8';

describe('App15component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component8 />);
    expect(baseElement).toBeTruthy();
  });
});
