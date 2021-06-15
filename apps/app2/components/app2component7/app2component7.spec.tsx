import { render } from '@testing-library/react';

import App2component7 from './app2component7';

describe('App2component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component7 />);
    expect(baseElement).toBeTruthy();
  });
});
