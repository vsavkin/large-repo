import { render } from '@testing-library/react';

import App15component5 from './app15component5';

describe('App15component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component5 />);
    expect(baseElement).toBeTruthy();
  });
});
