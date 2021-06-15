import { render } from '@testing-library/react';

import App7component64 from './app7component64';

describe('App7component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component64 />);
    expect(baseElement).toBeTruthy();
  });
});
