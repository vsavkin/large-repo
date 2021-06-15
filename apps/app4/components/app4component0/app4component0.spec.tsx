import { render } from '@testing-library/react';

import App4component0 from './app4component0';

describe('App4component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component0 />);
    expect(baseElement).toBeTruthy();
  });
});
