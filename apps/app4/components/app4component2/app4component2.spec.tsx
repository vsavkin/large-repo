import { render } from '@testing-library/react';

import App4component2 from './app4component2';

describe('App4component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component2 />);
    expect(baseElement).toBeTruthy();
  });
});
