import { render } from '@testing-library/react';

import App12component25 from './app12component25';

describe('App12component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App12component25 />);
    expect(baseElement).toBeTruthy();
  });
});
