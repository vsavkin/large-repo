import { render } from '@testing-library/react';

import App3component71 from './app3component71';

describe('App3component71', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component71 />);
    expect(baseElement).toBeTruthy();
  });
});
