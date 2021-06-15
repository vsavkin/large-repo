import { render } from '@testing-library/react';

import App3component84 from './app3component84';

describe('App3component84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component84 />);
    expect(baseElement).toBeTruthy();
  });
});
