import { render } from '@testing-library/react';

import App3component78 from './app3component78';

describe('App3component78', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component78 />);
    expect(baseElement).toBeTruthy();
  });
});
