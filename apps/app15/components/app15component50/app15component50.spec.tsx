import { render } from '@testing-library/react';

import App15component50 from './app15component50';

describe('App15component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component50 />);
    expect(baseElement).toBeTruthy();
  });
});
