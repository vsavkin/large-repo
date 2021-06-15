import { render } from '@testing-library/react';

import App8component41 from './app8component41';

describe('App8component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component41 />);
    expect(baseElement).toBeTruthy();
  });
});
