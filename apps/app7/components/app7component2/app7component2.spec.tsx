import { render } from '@testing-library/react';

import App7component2 from './app7component2';

describe('App7component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component2 />);
    expect(baseElement).toBeTruthy();
  });
});
