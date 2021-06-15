import { render } from '@testing-library/react';

import App2component28 from './app2component28';

describe('App2component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component28 />);
    expect(baseElement).toBeTruthy();
  });
});
