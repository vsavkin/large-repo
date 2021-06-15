import { render } from '@testing-library/react';

import App12component43 from './app12component43';

describe('App12component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component43 />);
    expect(baseElement).toBeTruthy();
  });
});
