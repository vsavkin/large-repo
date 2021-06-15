import { render } from '@testing-library/react';

import App10component40 from './app10component40';

describe('App10component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component40 />);
    expect(baseElement).toBeTruthy();
  });
});
