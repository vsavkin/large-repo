import { render } from '@testing-library/react';

import App15component14 from './app15component14';

describe('App15component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component14 />);
    expect(baseElement).toBeTruthy();
  });
});
