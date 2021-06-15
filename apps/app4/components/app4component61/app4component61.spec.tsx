import { render } from '@testing-library/react';

import App4component61 from './app4component61';

describe('App4component61', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component61 />);
    expect(baseElement).toBeTruthy();
  });
});
