import { render } from '@testing-library/react';

import App15component30 from './app15component30';

describe('App15component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component30 />);
    expect(baseElement).toBeTruthy();
  });
});
