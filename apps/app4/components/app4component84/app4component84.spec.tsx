import { render } from '@testing-library/react';

import App4component84 from './app4component84';

describe('App4component84', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component84 />);
    expect(baseElement).toBeTruthy();
  });
});
