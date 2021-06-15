import { render } from '@testing-library/react';

import App8component4 from './app8component4';

describe('App8component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App8component4 />);
    expect(baseElement).toBeTruthy();
  });
});
