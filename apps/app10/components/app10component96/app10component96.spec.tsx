import { render } from '@testing-library/react';

import App10component96 from './app10component96';

describe('App10component96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component96 />);
    expect(baseElement).toBeTruthy();
  });
});
