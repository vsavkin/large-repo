import { render } from '@testing-library/react';

import App10component31 from './app10component31';

describe('App10component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component31 />);
    expect(baseElement).toBeTruthy();
  });
});
