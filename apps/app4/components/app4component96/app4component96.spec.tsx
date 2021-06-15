import { render } from '@testing-library/react';

import App4component96 from './app4component96';

describe('App4component96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component96 />);
    expect(baseElement).toBeTruthy();
  });
});
