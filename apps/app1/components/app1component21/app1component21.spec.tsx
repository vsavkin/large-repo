import { render } from '@testing-library/react';

import App1component21 from './app1component21';

describe('App1component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component21 />);
    expect(baseElement).toBeTruthy();
  });
});
