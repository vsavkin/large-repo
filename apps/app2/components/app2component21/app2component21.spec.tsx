import { render } from '@testing-library/react';

import App2component21 from './app2component21';

describe('App2component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component21 />);
    expect(baseElement).toBeTruthy();
  });
});
