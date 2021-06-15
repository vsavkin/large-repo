import { render } from '@testing-library/react';

import App8component12 from './app8component12';

describe('App8component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component12 />);
    expect(baseElement).toBeTruthy();
  });
});
