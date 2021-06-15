import { render } from '@testing-library/react';

import App18component96 from './app18component96';

describe('App18component96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App18component96 />);
    expect(baseElement).toBeTruthy();
  });
});
