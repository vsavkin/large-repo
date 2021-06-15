import { render } from '@testing-library/react';

import App4component5 from './app4component5';

describe('App4component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component5 />);
    expect(baseElement).toBeTruthy();
  });
});
