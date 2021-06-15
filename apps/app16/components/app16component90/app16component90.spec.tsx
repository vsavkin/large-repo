import { render } from '@testing-library/react';

import App16component90 from './app16component90';

describe('App16component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component90 />);
    expect(baseElement).toBeTruthy();
  });
});
