import { render } from '@testing-library/react';

import App15component21 from './app15component21';

describe('App15component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component21 />);
    expect(baseElement).toBeTruthy();
  });
});
