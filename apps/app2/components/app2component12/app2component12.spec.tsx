import { render } from '@testing-library/react';

import App2component12 from './app2component12';

describe('App2component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component12 />);
    expect(baseElement).toBeTruthy();
  });
});
