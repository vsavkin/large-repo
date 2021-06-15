import { render } from '@testing-library/react';

import App4component50 from './app4component50';

describe('App4component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component50 />);
    expect(baseElement).toBeTruthy();
  });
});
