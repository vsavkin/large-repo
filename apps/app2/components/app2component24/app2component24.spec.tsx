import { render } from '@testing-library/react';

import App2component24 from './app2component24';

describe('App2component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component24 />);
    expect(baseElement).toBeTruthy();
  });
});
