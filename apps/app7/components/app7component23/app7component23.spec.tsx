import { render } from '@testing-library/react';

import App7component23 from './app7component23';

describe('App7component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component23 />);
    expect(baseElement).toBeTruthy();
  });
});
