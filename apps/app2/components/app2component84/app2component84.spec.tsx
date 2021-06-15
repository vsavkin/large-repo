import { render } from '@testing-library/react';

import App2component84 from './app2component84';

describe('App2component84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component84 />);
    expect(baseElement).toBeTruthy();
  });
});
