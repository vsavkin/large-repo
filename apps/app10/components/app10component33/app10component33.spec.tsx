import { render } from '@testing-library/react';

import App10component33 from './app10component33';

describe('App10component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component33 />);
    expect(baseElement).toBeTruthy();
  });
});
