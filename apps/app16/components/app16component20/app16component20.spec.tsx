import { render } from '@testing-library/react';

import App16component20 from './app16component20';

describe('App16component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component20 />);
    expect(baseElement).toBeTruthy();
  });
});
