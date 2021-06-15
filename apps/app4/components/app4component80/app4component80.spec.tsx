import { render } from '@testing-library/react';

import App4component80 from './app4component80';

describe('App4component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component80 />);
    expect(baseElement).toBeTruthy();
  });
});
