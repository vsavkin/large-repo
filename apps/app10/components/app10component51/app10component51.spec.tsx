import { render } from '@testing-library/react';

import App10component51 from './app10component51';

describe('App10component51', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component51 />);
    expect(baseElement).toBeTruthy();
  });
});
