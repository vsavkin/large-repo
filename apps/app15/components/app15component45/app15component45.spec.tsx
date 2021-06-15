import { render } from '@testing-library/react';

import App15component45 from './app15component45';

describe('App15component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component45 />);
    expect(baseElement).toBeTruthy();
  });
});
