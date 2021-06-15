import { render } from '@testing-library/react';

import App4component3 from './app4component3';

describe('App4component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component3 />);
    expect(baseElement).toBeTruthy();
  });
});
