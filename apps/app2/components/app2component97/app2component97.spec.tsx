import { render } from '@testing-library/react';

import App2component97 from './app2component97';

describe('App2component97', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component97 />);
    expect(baseElement).toBeTruthy();
  });
});
