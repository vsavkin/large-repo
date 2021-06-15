import { render } from '@testing-library/react';

import App15component22 from './app15component22';

describe('App15component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component22 />);
    expect(baseElement).toBeTruthy();
  });
});
