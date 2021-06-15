import { render } from '@testing-library/react';

import App4component16 from './app4component16';

describe('App4component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component16 />);
    expect(baseElement).toBeTruthy();
  });
});
