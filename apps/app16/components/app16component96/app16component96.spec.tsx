import { render } from '@testing-library/react';

import App16component96 from './app16component96';

describe('App16component96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component96 />);
    expect(baseElement).toBeTruthy();
  });
});
