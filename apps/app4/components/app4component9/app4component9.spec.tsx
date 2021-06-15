import { render } from '@testing-library/react';

import App4component9 from './app4component9';

describe('App4component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component9 />);
    expect(baseElement).toBeTruthy();
  });
});
