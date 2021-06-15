import { render } from '@testing-library/react';

import App15component4 from './app15component4';

describe('App15component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component4 />);
    expect(baseElement).toBeTruthy();
  });
});
