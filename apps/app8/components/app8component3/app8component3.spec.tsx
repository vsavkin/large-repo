import { render } from '@testing-library/react';

import App8component3 from './app8component3';

describe('App8component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component3 />);
    expect(baseElement).toBeTruthy();
  });
});
