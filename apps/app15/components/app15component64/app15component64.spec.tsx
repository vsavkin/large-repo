import { render } from '@testing-library/react';

import App15component64 from './app15component64';

describe('App15component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component64 />);
    expect(baseElement).toBeTruthy();
  });
});
