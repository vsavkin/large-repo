import { render } from '@testing-library/react';

import App3component90 from './app3component90';

describe('App3component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component90 />);
    expect(baseElement).toBeTruthy();
  });
});
