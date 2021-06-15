import { render } from '@testing-library/react';

import App4component23 from './app4component23';

describe('App4component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component23 />);
    expect(baseElement).toBeTruthy();
  });
});
