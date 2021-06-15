import { render } from '@testing-library/react';

import App15component0 from './app15component0';

describe('App15component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component0 />);
    expect(baseElement).toBeTruthy();
  });
});
