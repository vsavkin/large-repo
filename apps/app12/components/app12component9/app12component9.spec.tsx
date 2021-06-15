import { render } from '@testing-library/react';

import App12component9 from './app12component9';

describe('App12component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component9 />);
    expect(baseElement).toBeTruthy();
  });
});
