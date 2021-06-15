import { render } from '@testing-library/react';

import App10component41 from './app10component41';

describe('App10component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component41 />);
    expect(baseElement).toBeTruthy();
  });
});
