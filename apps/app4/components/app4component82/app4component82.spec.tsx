import { render } from '@testing-library/react';

import App4component82 from './app4component82';

describe('App4component82', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component82 />);
    expect(baseElement).toBeTruthy();
  });
});
