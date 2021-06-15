import { render } from '@testing-library/react';

import App15component31 from './app15component31';

describe('App15component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component31 />);
    expect(baseElement).toBeTruthy();
  });
});
