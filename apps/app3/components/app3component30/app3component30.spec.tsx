import { render } from '@testing-library/react';

import App3component30 from './app3component30';

describe('App3component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component30 />);
    expect(baseElement).toBeTruthy();
  });
});
