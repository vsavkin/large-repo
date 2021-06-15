import { render } from '@testing-library/react';

import App4component90 from './app4component90';

describe('App4component90', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component90 />);
    expect(baseElement).toBeTruthy();
  });
});
