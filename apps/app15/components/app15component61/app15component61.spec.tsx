import { render } from '@testing-library/react';

import App15component61 from './app15component61';

describe('App15component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component61 />);
    expect(baseElement).toBeTruthy();
  });
});
