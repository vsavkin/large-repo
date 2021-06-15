import { render } from '@testing-library/react';

import App4component40 from './app4component40';

describe('App4component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component40 />);
    expect(baseElement).toBeTruthy();
  });
});
