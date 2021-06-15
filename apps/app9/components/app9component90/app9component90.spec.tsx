import { render } from '@testing-library/react';

import App9component90 from './app9component90';

describe('App9component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App9component90 />);
    expect(baseElement).toBeTruthy();
  });
});
