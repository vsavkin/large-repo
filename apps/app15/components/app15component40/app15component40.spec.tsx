import { render } from '@testing-library/react';

import App15component40 from './app15component40';

describe('App15component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component40 />);
    expect(baseElement).toBeTruthy();
  });
});
