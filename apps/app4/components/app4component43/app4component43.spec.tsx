import { render } from '@testing-library/react';

import App4component43 from './app4component43';

describe('App4component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component43 />);
    expect(baseElement).toBeTruthy();
  });
});
