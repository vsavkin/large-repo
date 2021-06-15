import { render } from '@testing-library/react';

import App10component62 from './app10component62';

describe('App10component62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component62 />);
    expect(baseElement).toBeTruthy();
  });
});
