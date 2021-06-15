import { render } from '@testing-library/react';

import App4component71 from './app4component71';

describe('App4component71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component71 />);
    expect(baseElement).toBeTruthy();
  });
});
