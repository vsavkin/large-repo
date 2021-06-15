import { render } from '@testing-library/react';

import App4component11 from './app4component11';

describe('App4component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component11 />);
    expect(baseElement).toBeTruthy();
  });
});
