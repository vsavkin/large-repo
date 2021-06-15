import { render } from '@testing-library/react';

import App5component84 from './app5component84';

describe('App5component84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component84 />);
    expect(baseElement).toBeTruthy();
  });
});
