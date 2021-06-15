import { render } from '@testing-library/react';

import App12component8 from './app12component8';

describe('App12component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component8 />);
    expect(baseElement).toBeTruthy();
  });
});
