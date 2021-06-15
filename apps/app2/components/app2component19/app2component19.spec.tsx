import { render } from '@testing-library/react';

import App2component19 from './app2component19';

describe('App2component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component19 />);
    expect(baseElement).toBeTruthy();
  });
});
