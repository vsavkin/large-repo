import { render } from '@testing-library/react';

import App10component64 from './app10component64';

describe('App10component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component64 />);
    expect(baseElement).toBeTruthy();
  });
});
