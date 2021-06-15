import { render } from '@testing-library/react';

import App7component24 from './app7component24';

describe('App7component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component24 />);
    expect(baseElement).toBeTruthy();
  });
});
