import { render } from '@testing-library/react';

import App2component3 from './app2component3';

describe('App2component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component3 />);
    expect(baseElement).toBeTruthy();
  });
});
