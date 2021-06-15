import { render } from '@testing-library/react';

import App16component84 from './app16component84';

describe('App16component84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App16component84 />);
    expect(baseElement).toBeTruthy();
  });
});
