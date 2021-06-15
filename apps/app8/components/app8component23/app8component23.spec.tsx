import { render } from '@testing-library/react';

import App8component23 from './app8component23';

describe('App8component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component23 />);
    expect(baseElement).toBeTruthy();
  });
});
