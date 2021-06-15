import { render } from '@testing-library/react';

import App7component41 from './app7component41';

describe('App7component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component41 />);
    expect(baseElement).toBeTruthy();
  });
});
