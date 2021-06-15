import { render } from '@testing-library/react';

import App1component84 from './app1component84';

describe('App1component84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App1component84 />);
    expect(baseElement).toBeTruthy();
  });
});
