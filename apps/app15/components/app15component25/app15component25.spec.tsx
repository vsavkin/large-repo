import { render } from '@testing-library/react';

import App15component25 from './app15component25';

describe('App15component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component25 />);
    expect(baseElement).toBeTruthy();
  });
});
