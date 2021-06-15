import { render } from '@testing-library/react';

import App12component1 from './app12component1';

describe('App12component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component1 />);
    expect(baseElement).toBeTruthy();
  });
});
