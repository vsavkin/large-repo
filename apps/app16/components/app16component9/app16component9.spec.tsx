import { render } from '@testing-library/react';

import App16component9 from './app16component9';

describe('App16component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component9 />);
    expect(baseElement).toBeTruthy();
  });
});
