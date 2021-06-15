import { render } from '@testing-library/react';

import App2component45 from './app2component45';

describe('App2component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component45 />);
    expect(baseElement).toBeTruthy();
  });
});
