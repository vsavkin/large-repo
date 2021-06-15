import { render } from '@testing-library/react';

import App4component60 from './app4component60';

describe('App4component60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component60 />);
    expect(baseElement).toBeTruthy();
  });
});
