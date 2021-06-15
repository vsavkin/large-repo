import { render } from '@testing-library/react';

import App16component82 from './app16component82';

describe('App16component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component82 />);
    expect(baseElement).toBeTruthy();
  });
});
