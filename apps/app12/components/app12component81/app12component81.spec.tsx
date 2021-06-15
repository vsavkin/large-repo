import { render } from '@testing-library/react';

import App12component81 from './app12component81';

describe('App12component81', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component81 />);
    expect(baseElement).toBeTruthy();
  });
});
