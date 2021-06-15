import { render } from '@testing-library/react';

import App15component96 from './app15component96';

describe('App15component96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App15component96 />);
    expect(baseElement).toBeTruthy();
  });
});
