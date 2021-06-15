import { render } from '@testing-library/react';

import App4component22 from './app4component22';

describe('App4component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component22 />);
    expect(baseElement).toBeTruthy();
  });
});
