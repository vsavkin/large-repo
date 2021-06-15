import { render } from '@testing-library/react';

import App10component16 from './app10component16';

describe('App10component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component16 />);
    expect(baseElement).toBeTruthy();
  });
});
