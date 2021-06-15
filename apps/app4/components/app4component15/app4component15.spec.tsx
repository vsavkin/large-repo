import { render } from '@testing-library/react';

import App4component15 from './app4component15';

describe('App4component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component15 />);
    expect(baseElement).toBeTruthy();
  });
});
