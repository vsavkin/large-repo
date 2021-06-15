import { render } from '@testing-library/react';

import App5component90 from './app5component90';

describe('App5component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component90 />);
    expect(baseElement).toBeTruthy();
  });
});
