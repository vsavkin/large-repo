import { render } from '@testing-library/react';

import App12component18 from './app12component18';

describe('App12component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component18 />);
    expect(baseElement).toBeTruthy();
  });
});
