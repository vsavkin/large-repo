import { render } from '@testing-library/react';

import App4component72 from './app4component72';

describe('App4component72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component72 />);
    expect(baseElement).toBeTruthy();
  });
});
