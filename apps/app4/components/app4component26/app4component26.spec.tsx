import { render } from '@testing-library/react';

import App4component26 from './app4component26';

describe('App4component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component26 />);
    expect(baseElement).toBeTruthy();
  });
});
