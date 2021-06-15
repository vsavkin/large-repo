import { render } from '@testing-library/react';

import App8component11 from './app8component11';

describe('App8component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component11 />);
    expect(baseElement).toBeTruthy();
  });
});
