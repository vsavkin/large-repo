import { render } from '@testing-library/react';

import App10component92 from './app10component92';

describe('App10component92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component92 />);
    expect(baseElement).toBeTruthy();
  });
});
