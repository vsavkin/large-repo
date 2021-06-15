import { render } from '@testing-library/react';

import App10component25 from './app10component25';

describe('App10component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component25 />);
    expect(baseElement).toBeTruthy();
  });
});
