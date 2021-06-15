import { render } from '@testing-library/react';

import App15component6 from './app15component6';

describe('App15component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component6 />);
    expect(baseElement).toBeTruthy();
  });
});
