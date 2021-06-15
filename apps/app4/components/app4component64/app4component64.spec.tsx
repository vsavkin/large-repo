import { render } from '@testing-library/react';

import App4component64 from './app4component64';

describe('App4component64', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component64 />);
    expect(baseElement).toBeTruthy();
  });
});
