import { render } from '@testing-library/react';

import App3component96 from './app3component96';

describe('App3component96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component96 />);
    expect(baseElement).toBeTruthy();
  });
});
