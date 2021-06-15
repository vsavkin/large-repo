import { render } from '@testing-library/react';

import App12component32 from './app12component32';

describe('App12component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component32 />);
    expect(baseElement).toBeTruthy();
  });
});
