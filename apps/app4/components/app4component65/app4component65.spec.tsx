import { render } from '@testing-library/react';

import App4component65 from './app4component65';

describe('App4component65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component65 />);
    expect(baseElement).toBeTruthy();
  });
});
