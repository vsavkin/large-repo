import { render } from '@testing-library/react';

import App4component12 from './app4component12';

describe('App4component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component12 />);
    expect(baseElement).toBeTruthy();
  });
});
