import { render } from '@testing-library/react';

import App4component32 from './app4component32';

describe('App4component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component32 />);
    expect(baseElement).toBeTruthy();
  });
});
