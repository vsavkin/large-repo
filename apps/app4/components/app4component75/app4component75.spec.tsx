import { render } from '@testing-library/react';

import App4component75 from './app4component75';

describe('App4component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component75 />);
    expect(baseElement).toBeTruthy();
  });
});
