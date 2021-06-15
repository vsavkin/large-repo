import { render } from '@testing-library/react';

import App12component75 from './app12component75';

describe('App12component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component75 />);
    expect(baseElement).toBeTruthy();
  });
});
