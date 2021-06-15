import { render } from '@testing-library/react';

import App4component30 from './app4component30';

describe('App4component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App4component30 />);
    expect(baseElement).toBeTruthy();
  });
});
