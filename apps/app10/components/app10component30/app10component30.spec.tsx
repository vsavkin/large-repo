import { render } from '@testing-library/react';

import App10component30 from './app10component30';

describe('App10component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component30 />);
    expect(baseElement).toBeTruthy();
  });
});
