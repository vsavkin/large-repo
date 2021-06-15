import { render } from '@testing-library/react';

import App4component89 from './app4component89';

describe('App4component89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component89 />);
    expect(baseElement).toBeTruthy();
  });
});
