import { render } from '@testing-library/react';

import App4component6 from './app4component6';

describe('App4component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component6 />);
    expect(baseElement).toBeTruthy();
  });
});
