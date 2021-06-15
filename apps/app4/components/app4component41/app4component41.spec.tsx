import { render } from '@testing-library/react';

import App4component41 from './app4component41';

describe('App4component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component41 />);
    expect(baseElement).toBeTruthy();
  });
});
