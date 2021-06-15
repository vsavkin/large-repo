import { render } from '@testing-library/react';

import App15component98 from './app15component98';

describe('App15component98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component98 />);
    expect(baseElement).toBeTruthy();
  });
});
