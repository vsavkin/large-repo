import { render } from '@testing-library/react';

import App15component12 from './app15component12';

describe('App15component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component12 />);
    expect(baseElement).toBeTruthy();
  });
});
