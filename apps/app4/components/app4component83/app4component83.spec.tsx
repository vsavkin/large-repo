import { render } from '@testing-library/react';

import App4component83 from './app4component83';

describe('App4component83', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component83 />);
    expect(baseElement).toBeTruthy();
  });
});
