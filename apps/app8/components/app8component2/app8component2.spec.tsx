import { render } from '@testing-library/react';

import App8component2 from './app8component2';

describe('App8component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component2 />);
    expect(baseElement).toBeTruthy();
  });
});
