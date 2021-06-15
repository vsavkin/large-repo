import { render } from '@testing-library/react';

import App15component41 from './app15component41';

describe('App15component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component41 />);
    expect(baseElement).toBeTruthy();
  });
});
