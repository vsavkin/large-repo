import { render } from '@testing-library/react';

import App15component2 from './app15component2';

describe('App15component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component2 />);
    expect(baseElement).toBeTruthy();
  });
});
