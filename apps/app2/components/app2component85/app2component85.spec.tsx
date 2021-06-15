import { render } from '@testing-library/react';

import App2component85 from './app2component85';

describe('App2component85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component85 />);
    expect(baseElement).toBeTruthy();
  });
});
