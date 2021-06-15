import { render } from '@testing-library/react';

import App15component11 from './app15component11';

describe('App15component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component11 />);
    expect(baseElement).toBeTruthy();
  });
});
