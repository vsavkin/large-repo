import { render } from '@testing-library/react';

import App2component96 from './app2component96';

describe('App2component96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App2component96 />);
    expect(baseElement).toBeTruthy();
  });
});
