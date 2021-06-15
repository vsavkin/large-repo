import { render } from '@testing-library/react';

import App15component23 from './app15component23';

describe('App15component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component23 />);
    expect(baseElement).toBeTruthy();
  });
});
