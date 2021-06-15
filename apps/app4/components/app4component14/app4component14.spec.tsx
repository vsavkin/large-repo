import { render } from '@testing-library/react';

import App4component14 from './app4component14';

describe('App4component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component14 />);
    expect(baseElement).toBeTruthy();
  });
});
