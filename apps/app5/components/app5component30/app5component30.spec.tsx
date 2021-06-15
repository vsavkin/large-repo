import { render } from '@testing-library/react';

import App5component30 from './app5component30';

describe('App5component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App5component30 />);
    expect(baseElement).toBeTruthy();
  });
});
