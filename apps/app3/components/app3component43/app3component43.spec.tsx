import { render } from '@testing-library/react';

import App3component43 from './app3component43';

describe('App3component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component43 />);
    expect(baseElement).toBeTruthy();
  });
});
