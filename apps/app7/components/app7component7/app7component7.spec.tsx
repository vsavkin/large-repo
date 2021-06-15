import { render } from '@testing-library/react';

import App7component7 from './app7component7';

describe('App7component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App7component7 />);
    expect(baseElement).toBeTruthy();
  });
});
