import { render } from '@testing-library/react';

import App15component85 from './app15component85';

describe('App15component85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component85 />);
    expect(baseElement).toBeTruthy();
  });
});
