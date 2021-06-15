import { render } from '@testing-library/react';

import App3component13 from './app3component13';

describe('App3component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App3component13 />);
    expect(baseElement).toBeTruthy();
  });
});
