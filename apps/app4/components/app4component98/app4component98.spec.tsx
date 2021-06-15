import { render } from '@testing-library/react';

import App4component98 from './app4component98';

describe('App4component98', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component98 />);
    expect(baseElement).toBeTruthy();
  });
});
