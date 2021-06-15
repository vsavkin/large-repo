import { render } from '@testing-library/react';

import App2component4 from './app2component4';

describe('App2component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component4 />);
    expect(baseElement).toBeTruthy();
  });
});
