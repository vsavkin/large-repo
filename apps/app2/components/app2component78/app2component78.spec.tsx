import { render } from '@testing-library/react';

import App2component78 from './app2component78';

describe('App2component78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component78 />);
    expect(baseElement).toBeTruthy();
  });
});
