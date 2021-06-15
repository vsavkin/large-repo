import { render } from '@testing-library/react';

import App3component40 from './app3component40';

describe('App3component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component40 />);
    expect(baseElement).toBeTruthy();
  });
});
