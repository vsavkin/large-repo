import { render } from '@testing-library/react';

import App10component8 from './app10component8';

describe('App10component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App10component8 />);
    expect(baseElement).toBeTruthy();
  });
});
