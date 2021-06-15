import { render } from '@testing-library/react';

import App4component25 from './app4component25';

describe('App4component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component25 />);
    expect(baseElement).toBeTruthy();
  });
});
